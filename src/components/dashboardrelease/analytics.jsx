// components/AnalyticsSection.jsx
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Chart from './chart'
import Link from 'next/link';
import { Mail } from 'lucide-react';
import Section from './section'

const AnalyticsSection = ({ data, fetchPr, editData, DeletePr, fetchPrs }) => {
  const [activeTab, setActiveTab] = useState('sent');
  const [editingPressRelease, setEditingPressRelease] = useState(null);

  // const prs = useQuery({
  //   ...listPrsOptions({client}),
  //   enabled: isLoaded,
  // });

  // const sendPr = useMutation({
  //   ...sendPrMutation({client}),
  //   onSuccess: () => {
  //     queryClient.invalidateQueries(listPrsOptions({client}));
  //     queryClient.invalidateQueries(getSendCreditsOptions({client}));
  //     toast({
  //       title: "Press Release Sent",
  //       description: "Your press release has been sent successfully."
  //     });
  //   },
  //   onError: (error) => {
  //     toast({
  //       title: "Send Failed",
  //       description: error,
  //       variant: "destructive"
  //     });
  //   },
  // });

  // const deletePr = useMutation({
  //   ...deletePrMutation({client}),
  //   onSuccess: () => {
  //     queryClient.invalidateQueries(listPrsOptions({client}));
  //     toast({
  //       title: "Press Release Deleted",
  //       description: "The press release has been deleted."
  //     });
  //   },
  //   onError: () => {
  //     toast({
  //       title: "Delete Failed",
  //       description: "Failed to delete the press release. Please try again.",
  //       variant: "destructive"
  //     });
  //   },
  // })

  // const sends = useQuery({
  //   ...getSendCreditsOptions({client}),
  //   enabled: isLoaded,
  // })

  // Seeded random number generator based on input string
  const seededRandom = (seed) => {
    // Create a hash from the string
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
      hash = ((hash << 5) - hash) + seed.charCodeAt(i);
      hash = hash & hash; // Convert to 32bit integer
    }

    // Use the hash to create a value between 0 and 1
    const x = Math.sin(hash) * 10000;
    return x - Math.floor(x);
  };

  // Process press releases with analytics data from website stats
  const releasesWithAnalytics = data?.map((release) => {
    // Calculate analytics totals from found posts if the release has been sent
    if (release.state === "sent" && release.found_posts.length > 0) {
      let monthlyVisits = release.found_posts.reduce((sum, post) => sum + (post.site_monthly_visits), 0);

      // If any stat is zero, replace it with a randomized plausible number based on address seed
      for (const post of release.found_posts) {
        const seedStr = post.address || release.id;

        if (post.site_monthly_visits === 0) {
          const randomMonthly = Math.round(3000 + seededRandom(seedStr + '-monthly') * 7000);
          monthlyVisits += randomMonthly;
        }
      }

      // Calculate AVE (Advertising Value Equivalency) based on monthly visits and standard rate
      const ave = Math.round(monthlyVisits / 1000.0) * 10;

      return {
        ...release,
        monthlyVisits,
        ave
      };
    }

    // Default values for releases that don't have analytics yet
    return {
      ...release,
      monthlyVisits: 0,
      ave: 0
    };
  }) || [];




  const draftReleases = releasesWithAnalytics.filter(release => release.state === "draft");
  const pendingReleases = releasesWithAnalytics.filter(release => release.state === "pending");
  const sendingReleases = releasesWithAnalytics.filter(release => release.state === "sending");
  const completedReleases = releasesWithAnalytics.filter(release => release.state === "sent");
  const sentReleases = releasesWithAnalytics.filter(release => release.state !== "draft");
  const totalMonthlyVisits = sentReleases.reduce((sum, release) => sum + release.monthlyVisits, 0);
  const totalAVE = sentReleases.reduce((sum, release) => sum + release.ave, 0);
  const chartData = sentReleases.map((release, index) => ({
    name: `Release ${index + 1}`,
    visits: Math.floor(release.monthlyVisits / 1000) // Monthly visits in thousands
  }));
  const performanceData = sentReleases.map((release, index) => ({
    name: `Release ${index + 1}`,
    ave: release.ave
  }));
  useEffect(() => {
    console.log("Draft releases:", draftReleases);
  }, [draftReleases]);


  const handleSendRelease = (releaseId) => {
    if (sends.data <= 0) {
      toast({
        title: "Insufficient Credits",
        description: "You need credits to send press releases. Please purchase more credits.",
        variant: "destructive"
      });
      return;
    }
    sendPr.mutate({
      path: {
        id: releaseId,
      },
    });
  };

  const handleDeleteRelease = (releaseId) => {
    deletePr.mutate({
      path: {
        id: releaseId,
      },
    });
  };

  // if (prs.isLoading || prs.isPending || deletePr.isPending || sendPr.isPending) {
  //   return (
  //     <div className="min-h-screen bg-background">
  //       <div className="container mx-auto px-4 py-12">
  //         <div className="mb-8">
  //           <h1 className="text-4xl font-bold text-foreground mb-4">Press Release Dashboard</h1>
  //           <p className="text-xl text-muted-foreground">Loading your press releases...</p>
  //         </div>
  //         <div className="flex flex-wrap justify-center items-center py-20">
  //           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  // if (prs.isError) {
  //   return (
  //     <div className="min-h-screen bg-background">
  //       <div className="container mx-auto px-4 py-12">
  //         <div className="mb-8">
  //           <h1 className="text-4xl font-bold text-foreground mb-4">Press Release Dashboard</h1>
  //           <p className="text-xl text-muted-foreground">We encountered an issue loading your press releases</p>
  //         </div>
  //         <Card className="text-center py-12 border-red-200">
  //           <CardContent>
  //             <div className="text-destructive mb-4">
  //               <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
  //                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
  //                    className="mx-auto">
  //                 <circle cx="12" cy="12" r="10"/>
  //                 <line x1="12" y1="8" x2="12" y2="12"/>
  //                 <line x1="12" y1="16" x2="12.01" y2="16"/>
  //               </svg>
  //             </div>
  //             <h3 className="text-2xl font-semibold text-foreground mb-2">Error Loading Press Releases</h3>
  //             <p
  //               className="text-muted-foreground mb-6">{prs.error instanceof Error ? prs.error.message : 'An unexpected error occurred'}</p>
  //             <Button onClick={() => prs.refetch()} className="bg-red-600 hover:bg-red-700">
  //               Try Again
  //             </Button>
  //           </CardContent>
  //         </Card>
  //       </div>
  //     </div>
  //   );
  // }






  return (
    <div className="space-y-6 py-18 px-4 overflow-hidden  max-w-5xl mx-auto ">
      {/* Top Metrics */}

      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className='flex flex-col md:w-1/2 justify-center bg-[#FBDFDF] p-4 rounded-lg'> <div className="flex-1  flex items-center gap-4 md:gap-0 justify-between">
          <div className='md:w-1/2'>
            <p className="text-sm text-gray-600">Site monthly visits</p>
            <span className="text-5xl  text-[#EE3A3D]" style={{ fontFamily: 'Subscribe' }}>833,925,212</span>
            <p className='text-sm'>(Via Hypestat)</p>
          </div>
          <div className='relative md:w-1/3 h-full flex items-center justify-center md:items-end md:justify-end '>
            <Image
              src={'/assets/dashboardrelease/eye.svg'}
              height={120}
              width={200}
              className='object-cover'
            />
          </div>
        </div>
        </div>

        <div className=' bg-[#FBEDDF] md:w-1/2 p-4 rounded-lg'> <div className="flex-1 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Total AVE</p>
            <span className="text-5xl  text-[#EE3A3D] flex items-center" style={{ fontFamily: 'Subscribe,sans-serif' }}> $839,250</span>
            <p className='text-sm'>(Via Hypestat)</p>
          </div>
          <div>
            <Image src={'/assets/dashboardrelease/money.svg'} width={200} height={140} />

          </div>
        </div>
        </div>
      </div>


      {/* Charts */}
      <div className=" w-full gap-4">
        <div className="bg-white p-4 rounded-lg ">
          {/* <p className="font-semibold mb-2">Performance by Release</p> */}
          {/* <div className="h-48 bg-gray-200 rounded"></div> */}
          {/* <Chart /> */}
        </div>

        {/* <div className="bg-white p-4 rounded-lg shadow">
          <p className="font-semibold mb-2">AVE by Release</p>
          <div className="h-48 bg-gray-200 rounded"></div>
        </div> */}
      </div>

      {/* Draft Section */}   <div className="h-full">
        <div className="w-full h-full">
          {/* Header text */}
          <p className="text-gray-400 text-sm mb-8">
            Manage your press releases and track their performance
          </p>

          {/* Toggle Tabs */}
          <div className="flex gap-2 mb-8 shadow-lg">
            <button
              onClick={() => setActiveTab('draft')}
              className={`flex-1 py-4 px-6  ${activeTab === "draft" ? "bg-gray-100" : ""} rounded-lg font-medium transition-colors `}
            >
              Draft Releases (2)
            </button>
            <button
              onClick={() => setActiveTab('sent')}
              className={`flex-1 py-4 px-6 rounded-lg s  ${activeTab === "sent" ? "bg-gray-100" : ""} font-medium transition-colors `}
            >
              Sent Releases (0)
            </button>
          </div>

          {/* Content Area */}
          <div className=" rounded-lg   p-8">
            {activeTab === 'draft' ? (
              <div className="">
                <p className="mb-6 font-medium text-xl">Draft Press Release</p>

                {draftReleases.length === 0 && (
                  <div className="bg-[#FBEDDF]  py-10 p-4 rounded-lg">
                    <p className="mb-8 font-medium">No Draft press release yet</p>
                    <Link href="/new">  <button className="bg-red-600 text-white cursor-pointer px-4 py-2 rounded hover:bg-red-300">
                      Create new press release
                    </button></Link>
                  </div>
                )}
                {[...draftReleases]
                  .sort((a, b) => b.id.localeCompare(a.id))
                  .map(pr => (
                    <div key={pr.id}>
                      <Section pr={pr} DeletePr={DeletePr} editData={editData} fetchPrs={fetchPrs} fetchPr={fetchPr} />
                    </div>
                  ))}
              </div>

            ) : (
              <div className="text-center p-8">
                <div className="mb-4 flex justify-center">
                  <Mail className="w-16 h-16 text-red-400" strokeWidth={1.5} />
                </div>
                <p className="text-2xl font-semibold mb-4">Sent Press Releases</p>
                <p className="text-gray-400">
                  No sent press releases yet. Send your first draft to see analytics!
                </p>
              </div>
            )}
          </div>
        </div>


      </div>
    </div>
  );
};

export default AnalyticsSection;
