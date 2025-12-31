import Image from 'next/image'
import Formtwo from './form-two'
import { useState, useEffect } from 'react'
import StepTwo from './step-2'
import Mobileform from './mobileform'
import { useForm, Controller } from 'react-hook-form'
import * as Slider from '@radix-ui/react-slider';
import axios from 'axios'
import toast, { Toaster } from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import ENDPOINTS from '@/utils/ENDPOINTS'
import { useAuth } from "@clerk/nextjs";
import api from "../../api/axiosinterceptor"
import { useRouter } from 'next/router'
import { Popup } from '../../components/popup'
const dashboardinfoform = ({ fetch }) => {
  const [data, setdata] = useState()

  const days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];

  const cuisines = [
    'American', 'Asian', 'British', 'Chinese', 'European', 'French', 'Greek',
    'Indian', 'Italian', 'Japenese', 'Korean', 'Latin American', 'Lebanese',
    'MENA', 'Mexican', 'Russian', 'Spanish', 'Thai'
  ];

  const bestDishes = [
    "Afternoon Tea",
    "À La Carte Brunch",
    "Buffet Brunch",
    "Bar Food",
    "Breakfast",
    "Budget",
    "Burger",
    "Café",
    "Dessert",
    "Pizzeria",
    "Pub Food",
    "Seafood",
    "Steakhouse",
    "Fine dining",
    "Live entertainment",
    "Plant based / Vegan",
    "Bar",
    "Beach club",
    "Bakery / Pastry",
    "Food truck",
    "Sushi",
    "Sandwiches",
    "Takeaway"

  ];

  const traits = [
    "Sophisticated", "Refined", "Polished", "Chic", "Upscale", "Prestigious", "Exclusive",
    "Gourmet", "Inviting", "Welcoming", "Comfortable", "Cozy", "Relaxed", "Approachable",
    "Humble", "Homey", "Energetic", "Lively", "Vibrant", "Trendy", "Fun", "Whimsical", "Unique", "Edgy"
  ];

  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    restaurantName: '',
    menuUrl: '',
    website: '',
    tiktok: '',
    whatsapp: '',
    youtube: '',
    instagram: '',
    linkedin: '',
    facebook: '',
    website2: '',
    bookingLink: '',
    location: '',
    emirate: '',
    dubaiArea: '',
    cuisines: '',
    coverage: '',
    bestDishes: '',
    description: '',
    traits: '',


  })
  const router = useRouter();


  const { getToken } = useAuth()
  const restaurantSchema = z.object({
    menu: z.string().url("Invalid URL format").optional().or(z.literal("")).optional(),
    website: z.string().url("Invalid URL format").optional().or(z.literal("")),
    whatsapp: z.string().optional(),
    instagram: z.string().optional(),
    facebook: z.string().optional(),
    tiktok: z.string().optional(),
    youtube: z.string().optional(),
    linkedin: z.string().optional(),
    bookingLink: z.string().url("Invalid URL format").optional().or(z.literal("")),
    location: z.string().optional(),
    cityArea: z.string().min(2, "Area must be at least 2 characters"),
    emirate: z.string().min(2, "Emirate must be selected"),
    // ... other fields ...
    businessHours: z.object({
      monday: z.object({
        open: z.string().optional(),
        close: z.string().optional(),
        closed: z.boolean().optional()
      }),
      tuesday: z.object({
        open: z.string().optional(),
        close: z.string().optional(),
        closed: z.boolean().optional()
      }),
      wednesday: z.object({
        open: z.string().optional(),
        close: z.string().optional(),
        closed: z.boolean().optional()
      }),
      thursday: z.object({
        open: z.string().optional(),
        close: z.string().optional(),
        closed: z.boolean().optional()
      }),
      friday: z.object({
        open: z.string().optional(),
        close: z.string().optional(),
        closed: z.boolean().optional()
      }),
      saturday: z.object({
        open: z.string().optional(),
        close: z.string().optional(),
        closed: z.boolean().optional()
      }),
      sunday: z.object({
        open: z.string().optional(),
        close: z.string().optional(),
        closed: z.boolean().optional()
      }),
    }),
    restaurantName: z.string().min(2, "Restaurant name must be at least 2 characters").max(100),
    isLicensed: z.boolean().optional(),
    hasValetParking: z.boolean().optional(),
    allowsSmoking: z.boolean().optional(),
    isKidsFriendly: z.boolean().optional(),
    isPetsFriendly: z.boolean().optional(),
    hasTakeaway: z.boolean().optional(),
    hasOutdoorDining: z.boolean().optional(),
    cuisineType: z.array(z.string()).min(1, "Please select at least two cuisine type").max(2, "Maximum 2 cuisine types allowed"),
    restaurantType: z.array(z.string()).min(1, "Please select at least four restaurant type").max(4, "Maximum 4 restaurant types allowed"),
    averageSpend: z.string().regex(/^\d+-\d+$/, "Invalid price range format").optional(),
    description: z.string().min(10, "Description must be at least 10 characters").max(700, "Description cannot exceed 700 words"),
    personalityVibe: z.array(z.string()).optional(),
    email: z.string().email("Invalid email address"),
    phone: z.string().optional()
    // zod data 
  }).superRefine((data, ctx) => {
    const links = [
      data.website,
      data.whatsapp,
      data.instagram,
      data.facebook,
      data.tiktok,
      data.youtube,
      data.linkedin
    ]
      .map(v => (typeof v === "string" ? v.trim() : ""))
      .filter(v => v.length > 0);

    if (links.length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Please provide at least one of Website, WhatsApp, Instagram, Facebook, TikTok, YouTube, or LinkedIn.",
        path: ["website"]
      });
    }
  });

  const form = useForm({
    resolver: zodResolver(restaurantSchema),
    defaultValues: {
      restaurantName: "",
      menu: "",
      website: "",
      whatsapp: "",
      instagram: "",
      facebook: "",
      tiktok: "",
      youtube: "",
      linkedin: "",
      bookingLink: "",
      location: "",
      cityArea: "",
      emirate: "",
      businessHours: {
        monday: { open: "", close: "", closed: false },
        tuesday: { open: "", close: "", closed: false },
        wednesday: { open: "", close: "", closed: false },
        thursday: { open: "", close: "", closed: false },
        friday: { open: "", close: "", closed: false },
        saturday: { open: "", close: "", closed: false },
        sunday: { open: "", close: "", closed: false }
      },
      isLicensed: false,
      hasValetParking: false,
      allowsSmoking: false,
      isKidsFriendly: false,
      isPetsFriendly: false,
      hasTakeaway: false,
      hasOutdoorDining: false,
      cuisineType: [],
      restaurantType: [],
      averageSpend: "100-1000",
      description: "",
      personalityVibe: [],
      email: "",
      phone: ""
    }
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  //  Send data to API
  const submitForm = async () => {

    try {
      const formValues = form.getValues();
      console.log("formdata" + JSON.stringify(formValues.businessHours))

      // Temporarily set the plain object before validation
      const validation = await form.trigger();
      if (!validation) {
        console.log(" FORM ERRORS:", form.formState.errors);
        const bh = form.getValues().businessHours;
        console.log("businessHours typeof:", typeof bh);
        console.log("businessHours keys:", bh ? Object(bh) : bh);
        console.log("monday value:", bh?.monday);
        const result = restaurantSchema.safeParse(form.getValues());
        if (!result.success) {
          console.log("Zod errors:", result.error.format());
        } else {
          console.log("Parsed data:", result.data);
        }


        toast.error("Please fix the highlighted fields.");
        return;
      }



      // Prepare data for API
      const restaurantData = {
        email: formValues.email,
        custom: {
          restaurantName: formValues.restaurantName,
          menu: formValues.menu,
          website: formValues.website,
          whatsapp: formValues.whatsapp,
          instagram: formValues.instagram,
          facebook: formValues.facebook,
          tiktok: formValues.tiktok,
          youtube: formValues.youtube,
          linkedin: formValues.linkedin,
          bookingLink: formValues.bookingLink,
          location: formValues.location,
          cityArea: formValues.cityArea,
          emirate: formValues.emirate,
          businessHours: formValues.businessHours,
          isLicensed: formValues.isLicensed,
          hasValetParking: formValues.hasValetParking,
          allowsSmoking: formValues.allowsSmoking,
          isKidsFriendly: formValues.isKidsFriendly,
          isPetsFriendly: formValues.isPetsFriendly,
          hasTakeaway: formValues.hasTakeaway,
          hasOutdoorDining: formValues.hasOutdoorDining,
          cuisineType: formValues.cuisineType,
          restaurantType: formValues.restaurantType,
          averageSpend: formValues.averageSpend,
          description: formValues.description,
          personalityVibe: formValues.personalityVibe,
          phone: formValues.phone
        }
      };

      const restaurantdata = {
        custom: {
          allowsSmoking: false,
          averageSpend: "100-500",
          bookingLink: "",
          businessHours: {
            monday: { open: "08:00", close: "18:00", closed: false },
            tuesday: { open: "08:00", close: "18:00", closed: false },
            wednesday: { open: "", close: "", closed: true },
            thursday: { open: "", close: "", closed: true },
            friday: { open: "", close: "", closed: true },
            saturday: { open: "", close: "", closed: true },
            sunday: { open: "", close: "", closed: true }
          },
          cityArea: "Dubai Marina",
          cuisineType: ["Asian", "French"],
          description: "test test test test",
          emirate: "Dubai",
          facebook: "",
          hasOutdoorDining: false,
          hasTakeaway: false,
          hasValetParking: false,
          instagram: "",
          isKidsFriendly: true,
          isLicensed: true,
          isPetsFriendly: false,
          linkedin: "",
          location: "https://share.google/Xz4SyHJZOALPvpmg8",
          menu: "",
          personalityVibe: ["Refined", "Prestigious", "Inviting", "Welcoming", "Energetic", "Lively"],
          phone: "+971 50 1234567",
          restaurantName: "test 4",
          restaurantType: ["Breakfast", "Afternoon Tea", "Dessert", "Pizzeria"],
          tiktok: "",
          website: "http://355294401173-frontend-dev.s3-website.me-central-1.amazonaws.com/",
          whatsapp: "",
          youtube: ""
        },
        email: "tech1.digiexpo@gmail.com",
        pressReleaseDetails: {
          primaryFocus: "venue-redesign",
          goLiveDate: "2020-02-22",
          duration: "week-long",
          keyHighlights: "test",
          priceRange: "",
          bookingRequired: "",
          primarySpokesperson: "general-manager",
          spokespersonName: "test",
          spokespersonTitle: "test",
          spokespersonQuote: "test2",
          style: "formal"
        }
      };
      console.log("formdata" + form)
      const token = await getToken()
      const response = await api.put({ url: ENDPOINTS.OTHER.RESTAURANT, data: restaurantData, token })


      const res = await response
      console.log('Success:', res)
      setdata(res)

      setCurrentPage(true)

      router.push('/dashboard-dashboard')

    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }




  useEffect(() => {
    if (fetch) {
      const data = fetch;
      const averageSpend = data.custom.averageSpend || "100-500";

      form.reset({
        restaurantName: data.custom.restaurantName || "",
        menu: data.custom.menu || "",
        website: data.custom.website || "",
        whatsapp: data.custom.whatsapp || "",
        instagram: data.custom.instagram || "",
        facebook: data.custom.facebook || "",
        tiktok: data.custom.tiktok || "",
        youtube: data.custom.youtube || "",
        linkedin: data.custom.linkedin || "",
        bookingLink: data.custom.bookingLink || "",
        location: data.custom.location || "",
        cityArea: data.custom.cityArea || "",
        emirate: data.custom.emirate || "",
        businessHours: data.custom.businessHours || {
          monday: { open: "", close: "", closed: false },
          tuesday: { open: "", close: "", closed: false },
          wednesday: { open: "", close: "", closed: false },
          thursday: { open: "", close: "", closed: false },
          friday: { open: "", close: "", closed: false },
          saturday: { open: "", close: "", closed: false },
          sunday: { open: "", close: "", closed: false },
        },
        isLicensed: data.custom.isLicensed || false,
        hasValetParking: data.custom.hasValetParking || false,
        allowsSmoking: data.custom.allowsSmoking || false,
        isKidsFriendly: data.custom.isKidsFriendly || false,
        isPetsFriendly: data.custom.isPetsFriendly || false,
        hasTakeaway: data.custom.hasTakeaway || false,
        hasOutdoorDining: data.custom.hasOutdoorDining || false,
        cuisineType: data.custom.cuisineType || [],
        restaurantType: data.custom.restaurantType || [],
        averageSpend: averageSpend,
        description: data.custom.description || "",
        personalityVibe: data.custom.personalityVibe || [],
        email: data.email || "",
        phone: data.custom.phone || ""
      });
    }
  }, [fetch, form]);



  //
  // add register in the form
  const Error = ({ name, form }) => {
    return form.formState.errors[name] ? (
      <p className="text-red-500 text-sm mt-1">
        {form.formState.errors[name]?.message}
      </p>
    ) : null;
  };


  const [currentPage, setCurrentPage] = useState(false)
  return (
    <div className='py-12'>


      <div><div className="w-full flex flex-col items-center justify-center ">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-5xl uppercase mb-4  text-center">Step 1-Core Information</h2>
          <form action="submit" onSubmit={(e) => { e.preventDefault(); submitForm(); }}
            className="flex flex-col items-center " >
            <div className="flex gap-4 flex-col  w-full">
              <div className="flex flex-col md:flex-row gap-4 w-full  items-center justify-center">
                <div className="col-span-1 bg-[#FBEDDF] w-[90%]  md:w-[500px]   h-[180px] py-8 p-4 rounded-2xl flex flex-col justify-between">
                  <label className="font-medium text-sm mb-1">Contact Email
                  </label>
                  <input type="email" {...form.register('email')}
                    // name='email' value={formData.email} 
                    placeholder="Example@gmail.com" className="border border-gray-300 bg-white   rounded-md p-2 text-sm" />
                  <Error name="email" form={form} />
                </div>
                <div className="col-span-1 bg-[#FBDFDF]  w-[90%]  md:w-[500px]   h-[180px]  py-8  p-4 rounded-2xl flex flex-col justify-between">
                  <label className="font-medium text-sm mb-1">Phone number
                  </label>
                  <div className="flex gap-2 flex-col w-full">
                    <p className="text-gray-500 text-xs">Restaurant contact phone number</p>
                    <input type="text" {...form.register('phone')}

                      placeholder="phone no"
                      className="border border-gray-300   bg-white rounded-md p-2 text-sm" />
                    <Error name="phone" form={form} />
                  </div></div>
              </div>
              <div className="flex gap-4 flex-col md:flex-row w-full  items-center justify-center">



                <div className="col-span-1 bg-[#FBEDDF]  w-[90%] md:w-[500px]   py-8   h-[180px] p-4 rounded-2xl flex flex-col justify-between">
                  <label className="font-medium text-sm mb-1">Restaurant name*
                  </label>
                  <input
                    {...form.register('restaurantName')} type="text" placeholder="Intersect by Lexus" className="border border-gray-300  bg-white rounded-md p-2 text-sm" />
                  {form.formState.errors.restaurantName && (
                    <p className="text-red-500 text-sm mt-1 mb-2">
                      {form.formState.errors.restaurantName.message}
                    </p>
                  )}
                </div>
                <div className="col-span-1 bg-[#FBDFDF]  py-8   w-[90%] md:w-[500px]  h-[180px] p-4 rounded-2xl flex flex-col justify-between">
                  <label className="font-medium text-sm mb-1">Menu URL</label>
                  <input
                    type="text"
                    {...form.register('menu')}
                    // value={formData.menuUrl} onChange={handleChange}
                    placeholder="https://discoverlexus.com/stories/intersect-by-lexus" className="border border-gray-300  bg-white rounded-md p-2 text-sm" />
                  <Error name="menu" form={form} />

                </div>
              </div>
            </div>
            {/* </div> */}
            <div className="max-w-5xl mx-auto py-6">
              <p className="text-xl  mb-2 font-medium text-center md:text-left">Digital Accounts Links</p>
              <div className="flex md:flex-row flex-col gap-4 mb-4 items-start justify-start ">

                <div className="flex flex-col gap-4 w-full items-center">
                  <div className="col-span-1 bg-[#FBEDDF] h-[250px] w-[90%] md:w-[250px] py-8 p-3 rounded-2xl flex flex-col justify-between">
                    <label className="font-medium text-sm mb-1">Website</label>
                    <input type="text"
                      {...form.register('website')}
                      placeholder="https" className="border border-gray-300   bg-white rounded-md p-2 text-sm" />
                    <Error name="website" form={form} />
                  </div>

                  <div className="col-span-1 bg-[#FBDFDF] h-[150px] md:h-[200px] w-[90%] py-8  md:w-[250px] p-3 rounded-2xl flex flex-col justify-between">
                    <label className="font-medium text-sm mb-1">TikTok</label>
                    <input
                      {...form.register('tiktok')}
                      type="text" placeholder="https" className="border border-gray-300  bg-white rounded-md p-2 text-sm" />
                    <Error name="tiktok" form={form} />
                  </div>
                </div>
                <div className="flex flex-col gap-4 w-full items-center">
                  <div className="col-span-1 bg-[#FBDFDF] h-[150px] md:h-[200px] w-[90%] py-8 md:w-[250px] p-3 rounded-2xl flex flex-col justify-between">
                    <label className="font-medium text-sm mb-1">WhatsApp Business</label>
                    <input
                      {...form.register('whatsapp')} type="text" placeholder="https" className="border border-gray-300  bg-white rounded-md p-2 text-sm" />


                    {form.formState.errors._form && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors._form.message}
                      </p>
                    )}

                  </div>
                  <div className="col-span-1 bg-[#FBEDDF]  h-[150px] md:h-[250px] py-8 w-[90%]  md:w-[250px] p-3 rounded-2xl flex flex-col justify-between">
                    <label className="font-medium text-sm mb-1">Youtube</label>
                    <input type="text"
                      {...form.register('youtube')}
                      placeholder="https" className="border border-gray-300   bg-white rounded-md p-2 text-sm" />
                    <Error name="youtube" form={form} />
                  </div>
                </div>
                <div className="flex flex-col gap-4 w-full items-center">
                  <div className="col-span-1 bg-[#FBEDDF] h-[150px] md:h-[250px] w-[90%] py-8 md:w-[250px] py-8 p-3 rounded-2xl flex flex-col justify-between">
                    <label className="font-medium text-sm mb-1">Instagram</label>
                    <input type="text"
                      {...form.register('instagram')}
                      placeholder="https" className="border border-gray-300   bg-white rounded-md p-2 text-sm" />
                    <Error name="instagram" form={form} />
                  </div>
                  <div className="col-span-1 bg-[#FBDFDF] h-[150px] md:h-[200px] py-8  w-[90%]   md:w-[250px] p-3 rounded-2xl flex flex-col justify-between">
                    <label className="font-medium text-sm mb-1">Linkedin</label>
                    <input type="text"
                      {...form.register('linkedin')}
                      placeholder="https" className="border border-gray-300   bg-white rounded-md p-2 text-sm" />
                    <Error name="linkedin" form={form} />
                  </div>
                </div>
                <div className="flex flex-col gap-4 w-full items-center">
                  <div className="col-span-1 bg-[#FBDFDF] h-[150px] md:h-[200px]  w-[90%] py-8  md:w-[250px] p-3 rounded-2xl flex flex-col justify-between">
                    <label className="font-medium text-sm mb-1">Facebook</label>
                    <input type="text"
                      {...form.register('facebook')}
                      placeholder="https" className="border border-gray-300  bg-white rounded-md p-2 text-sm" />
                    <Error name="facebook" form={form} />
                  </div>
                  {/* <div className="col-span-1 bg-[#FBEDDF] h-[150px] md:h-[250px] w-[90%]  md:w-[250px] py-8 p-3 rounded-2xl flex flex-col justify-between"> */}
                  {/* <label className="font-medium text-sm mb-1">Website</label>
                    <input type="text"
                    {...form.register('website2')}
                      // value={formData.website2 || ''}
                      // onChange={handleChange}
                    placeholder="https" className="border border-gray-300  text-gray-500 bg-white rounded-md p-2 text-sm" /> */}
                  {/* </div> */}
                </div>


              </div>


              <div className="flex gap-4 flex-col items-center justify-center md:flex-row mb-4">
                <div className="col-span-1 bg-[#FBEDDF]  w-[90%] md:w-1/2  h-[180px]  py-8 p-4 rounded-2xl flex flex-col justify-between">
                  <div>
                    <label className="font-medium text-sm mb-4">Booking Reservation Link
                    </label>
                    <p className='text-[10px] text-[#9B9B9B]'>Enter link to booking page on your website, Seven Rooms or any other booking platform your
                      restaurant uses. Leave blank if N/A.</p></div>
                  <input type="text"
                    {...form.register('bookingLink')}
                    // name="bookingLink"
                    // value={formData.bookingLink || ''}
                    // onChange={handleChange}
                    placeholder="https" className="border border-gray-300 bg-white  rounded-md p-2 text-sm" />

                  <Error name="bookingLink" form={form} />  </div>
                <div className="col-span-1 bg-[#FBDFDF]  w-[90%] md:w-1/2 h-[180px] py-8 p-4 rounded-2xl flex flex-col justify-between">
                  <div>
                    <label className="font-medium text-sm mb-1">Location
                    </label>
                    <p className="text-gray-500 text-[10px]">Enter Google Map/Business link (if you have more than one branch, input your main/flagship location)</p>

                  </div>
                  <div className="flex gap-2 flex-col w-full">
                    <input type="text"
                      {...form.register('location')}
                      //  name="location"
                      // value={formData.location || ''}
                      // onChange={handleChange}
                      placeholder="https://discoverlexus.com/stories/intersect-by-lexus" className="border border-gray-300   bg-white rounded-md p-2 text-sm" />
                    <Error name="location" form={form} />
                  </div></div>
              </div>
              <div className=" flex gap-4 flex-col md:flex-row items-center md:items-start justify-center  mb-4 ">
                <div className="flex flex-col h-[400px] gap-4  w-[90%] md:w-1/2 mb-4">
                  <div className="col-span-1 bg-[#FBDFDF]  h-1/2 w-full p-3 py-8 rounded-2xl flex flex-col justify-between">
                    <label className="font-medium text-sm mb-1">Select Emirate*</label>
                    <select
                      {...form.register('emirate')}
                      // name="emirate"
                      // value={formData.emirate || ''}
                      // onChange={handleChange}
                      className="border border-gray-300 bg-white rounded-md p-2 text-sm"
                    >
                      <option value="">Select Emirate</option>
                      <option value="Dubai">Dubai</option>
                      <option value="Abu Dhabi">Abu Dhabi</option>
                      <option value="Sharjah">Sharjah</option>
                      <option value="Ajman">Ajman</option>
                      <option value="Fujairah">Fujairah</option>
                      <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                      <option value="Umm Al Quwain">Umm Al Quwain</option>
                    </select>
                    <Error name="emirate" form={form} />
                  </div>
                  {form.watch("emirate") == "Dubai" && <div className="col-span-1 bg-[#FBEDDF] h-1/2    w-full p-3 py-8 rounded-2xl flex flex-col justify-between">
                    <label className="font-medium text-sm mb-1">Dubai Area</label>
                    <select
                      name="cityArea"
                      {...form.register("cityArea")}
                      className="border border-gray-300  bg-white rounded-md p-2 text-sm"
                    >
                      <option value="">Select Area</option>
                      <option value="Al Barsha">Al Barsha</option>
                      <option value="Barsha Heights">Barsha Heights</option>
                      <option value="Bluewaters">Bluewaters</option>
                      <option value="Business Bay">Business Bay</option>
                      <option value="Downtown Dubai">Downtown Dubai</option>
                      <option value="Dubai Design District">Dubai Design District</option>
                      <option value="Dubai Hills">Dubai Hills</option>
                      <option value="DIFC">DIFC</option>
                      <option value="Dubai Marina">Dubai Marina</option>
                      <option value="Dubai Media City">Dubai Media City</option>
                      <option value="Dubai Studio City">Dubai Studio City</option>
                      <option value="Garhoud">Garhoud</option>
                      <option value="Jumeirah">Jumeirah</option>
                      <option value="Jumeirah Beach Residence">Jumeirah Beach Residence</option>
                      <option value="Jumeirah Islands">Jumeirah Islands</option>
                      <option value="Jumeirah Lakes Towers">Jumeirah Lakes Towers</option>
                      <option value="Mirdif">Mirdif</option>
                      <option value="Oud Metha">Oud Metha</option>
                      <option value="Palm Jumeirah">Palm Jumeirah</option>
                      <option value="Sheikh Zayed Road">Sheikh Zayed Road</option>
                      <option value="Umm Suqeim">Umm Suqeim</option>
                    </select>
                    <Error name="dubaiArea" form={form} />


                  </div>}
                </div>
                <div className="col-span-1 bg-[#FBEDDF]  md:h-[400px]   w-[90%] md:w-1/2 p-6 py-8 rounded-2xl flex flex-col justify-between">
                  {/* <Business /> */}
                  <div className="w-full  text-[#9B9B9B] rounded-xl">
                    <p className="text-md text-black font-medium mb-6">Business Operating hours</p>

                    <div className="flex flex-col gap-4 space-y-6 md:space-y-0 ">
                      {['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map((day, index) => (
                        <div
                          key={index}
                          className=" flex md:grid grid-cols-4  space-y-2 md:space-y-0 flex-wrap  space-x-4 md:space-x-0 h-[25px]  md:gap-0  md:grid-cols-[80px_auto_auto_auto_auto] items-center  text-[10px]"
                        >
                          {/* Day Name */}
                          <p className="font-medium text-[#9B9B9B]">{day}</p>

                          {/* Radio buttons */}
                          {/* <div className="flex gap-2 items-center">
              <input
                type="radio"
                name={`radio-${index}`}
                className="accent-red-500"
                defaultChecked={index === 0} // Monday open
              />
              <span className="text-[10px]">Open</span>
            </div> */}

                          <div className="flex gap-2 items-center">
                            <input
                              type="checkbox"
                              id={`${day}-closed`}
                              checked={form.watch(`businessHours.${day.toLowerCase()}.closed`)}
                              // name={`checl-${index}`}
                              // checked={form.watch(`businessHours.monday.closed`)}
                              onChange={(e) => {
                                form.setValue(`businessHours.${day.toLowerCase()}.closed`, e.target.checked);
                              }}
                              className="accent-red-500"
                            />

                            <span className="text-[10px]">Closed</span>
                          </div>
                          {!form.watch(`businessHours.${day.toLowerCase()}.closed`) && (<>
                            {/* Open Time */}
                            <div className="flex items-center gap-2">
                              <span className="text-[10px]">Open:</span>
                              <input
                                type="time"
                                id={`${day}-open`}

                                placeholder="_ _ : _ _"
                                {...form.register(`businessHours.${day.toLowerCase()}.open`)}

                                className="w-24 px-2 py-1 text-[10px] border rounded-md bg-white"
                              />
                            </div>

                            {/* Close Time */}
                            <div className="flex items-center gap-2">
                              <span className="text-[10px]">Close:</span>
                              <input
                                type="time"
                                id={`${day}-close`}
                                placeholder="_ _ : _ _"
                                className="w-24 px-2 py-1 border text-[10px] rounded-md bg-white"
                                {...form.register(`businessHours.${day.toLowerCase()}.close`)}

                              />
                            </div> </>)}
                        </div>

                      ))}
                    </div>


                  </div>
                </div>
                <div className="flex md:hidden bg-[#FBEDDF] py-8 h-[280px] md:h-[180px] px-4 w-[90%] md:w-full  flex-col justify-between rounded-xl mb-6">
                  <p className="font-medium mb-3">Restaurant Features</p>
                  <div className="flex flex-wrap text-[#9B9B9B] font-medium gap-4 text-sm">
                    {[
                      'Is licensed (i.e. serves alcohol)',
                      'Allows smoking',
                      'Pets friendly',
                      'Has outdoor dining area',
                      'Valet parking available',
                      'Kids Friendly',
                      'Take away'
                    ].map((feature, index) => (
                      <label key={index} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          name="features"
                          {...form.register('featue')}
                          onChange={handleChange}
                          className="accent-red-500 h-4 w-4"
                        />
                        <Error name="featue" form={form} />
                        {feature}
                      </label>
                    ))}
                  </div>

                </div>

              </div>
              <div className="hidden md:flex bg-[#FBEDDF] py-4 h-[280px] md:h-[230px] px-4 w-[90%] md:w-full  flex-col justify-between rounded-xl mb-6">
                <p className="font-medium mb-3">Restaurant Features</p>
                <div className="grid md:grid-cols-2 gap-y-2 gap-x-8">
                  <div className="flex  space-x-2">
                    <input
                      type="checkbox"
                      id="isLicensed"
                      className='accent-red-500 h-4 w-4'
                      {...form.register('isLicensed')}
                    />
                    <Error name="isLicensed" form={form} />

                    <label htmlFor="isLicensed">Is licensed (i.e. serves alcohol)</label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="hasValetParking"
                      className='accent-red-500 h-4 w-4'

                      {...form.register('hasValetParking')}
                    />
                    <label htmlFor="hasValetParking">Valet parking available</label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="allowsSmoking"
                      className='accent-red-500 h-4 w-4'

                      {...form.register('allowsSmoking')}
                    />
                    <label htmlFor="allowsSmoking">Allows smoking</label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="isKidsFriendly"
                      className='accent-red-500 h-4 w-4'

                      {...form.register('isKidsFriendly')}
                    />
                    <label htmlFor="isKidsFriendly">Kids friendly</label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="isPetsFriendly"
                      className='accent-red-500 h-4 w-4'

                      {...form.register('isPetsFriendly')}
                    />
                    <label htmlFor="isPetsFriendly">Pets friendly</label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="hasTakeaway"
                      className='accent-red-500 h-4 w-4'

                      {...form.register('hasTakeaway')}
                    />
                    <label htmlFor="hasTakeaway">Take away</label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="hasOutdoorDining"
                      className='accent-red-500 h-4 w-4'

                      {...form.register('hasOutdoorDining')}
                    />
                    <label htmlFor="hasOutdoorDining">Has outdoor dining area</label>
                  </div>
                </div>
              </div>


            </div>




            <div className="max-w-5xl mx-auto p-4">
              <h2 className="text-center text-5xl font-medium mb-6">
                STEP 2 – MORE ABOUT YOUR RESTAURANT
              </h2>

              {/* Restaurant Features */}


              {/* Two Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

                {/* Cuisine */}
                <div className="flex flex-col gap-4 justify-between h-[500px]">
                  <div className="bg-[#FBEDDF] flex flex-col justify-between py-8 p-5 rounded-xl h-[70%]">
                    <p className="font-medium mb-3">What type of cuisine do you serve (max.2)</p>
                    {form.formState.errors.cuisineType && (
                      <p className="text-red-500 text-sm mt-1 mb-2">
                        {form.formState.errors.cuisineType.message}
                      </p>
                    )}
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-2 text-[#9B9B9B] font-medium text-sm">
                      {cuisines.map((item, index) => (
                        <label key={index} className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            id={`cuisine-${item}`}
                            value={item}
                            className="accent-red-500 h-4 w-4"
                            checked={form.watch('cuisineType')?.includes(item)}
                            onChange={(e) => {
                              const current = form.watch('cuisineType') || [];

                              if (e.target.checked) {
                                if (current.length < 2) {
                                  form.setValue("cuisineType", [...current, item]);
                                }
                              } else {
                                form.setValue(
                                  "cuisineType",
                                  current.filter((cuisine) => cuisine !== item)
                                );
                              }
                            }}
                          />
                          {item}
                          <Error name="cuisineType" form={form} />

                        </label>

                      ))}

                      {/* Other (custom input) */}
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="cuisine-Other"
                          value="Other"
                          className="accent-red-500 h-4 w-4"
                          checked={form.watch("cuisineType")?.some((t) => t.startsWith("Other:"))}
                          onChange={(e) => {
                            const current = form.watch("cuisineType") || [];

                            if (e.target.checked) {
                              if (current.length < 2) {
                                form.setValue("cuisineType", [...current, "Other: "]);
                              }
                            } else {
                              form.setValue(
                                "cuisineType",
                                current.filter((t) => !t.startsWith("Other:"))
                              );
                            }
                          }}
                        />
                        Other
                      </label>

                      {/* Text input for "Other" when selected */}
                      {form.watch("cuisineType")?.some((t) => t.startsWith("Other:")) && (
                        <div className="col-span-4 mt-2">
                          <input
                            placeholder="Enter your cuisine type"
                            className="border border-gray-300  text-gray-500 bg-white rounded-md w-full p-2 text-sm"
                            value={
                              (form
                                .watch("cuisineType")
                                ?.find((t) => t.startsWith("Other:")) || "Other: "
                              ).substring(7)
                            }
                            onChange={(e) => {
                              const current = form.watch("cuisineType") || [];
                              const nonOther = current.filter((t) => !t.startsWith("Other:"));
                              form.setValue("cuisineType", [
                                ...nonOther,
                                `Other: ${e.target.value}`,
                              ]);
                            }}
                          />
                        </div>
                      )}

                    </div>
                  </div>
                  <div className="bg-[#FBDFDF] h-[30%] py-8 p-5 rounded-xl">
                    <p className="font-medium  mb-3">What is the average cost of a meal per person? (Optional)</p>
                    {/* <input
              type="range"
              name="coverage"
              min="100"
              max="1000"
              step="50"
              value={formData.coverage || 100}
              onChange={handleChange}
              className="w-full h-[2px] bg-[#9B9B9B] rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#FBEDDF] [&::-webkit-slider-thumb]:border-2  [&::-webkit-slider-thumb]:border-[#EE3A3D]"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>Dhs 100</span>
              <span>Dhs 1000</span>
            </div> */}
                    <Controller
                      control={form.control}
                      name="averageSpend"
                      defaultValue="100-500"
                      render={({ field }) => {
                        const [min, max] = field.value.split('-').map(Number);

                        return (
                          <div className="w-full">
                            <Slider.Root
                              className="relative flex items-center select-none touch-none w-full h-5"
                              value={[min, max]}
                              min={100}
                              max={1000}
                              step={50}
                              onValueChange={(values) => field.onChange(`${values[0]}-${values[1]}`)}
                            >
                              <Slider.Track className="bg-gray-300 relative grow h-[4px] rounded-full">
                                <Slider.Range className="absolute bg-red-500 h-full rounded-full" />
                              </Slider.Track>
                              <Slider.Thumb className="block w-4 h-4 bg-white border-2 border-red-500 rounded-full" />
                              <Slider.Thumb className="block w-4 h-4 bg-white border-2 border-red-500 rounded-full" />
                            </Slider.Root>

                            <div className="flex justify-between text-sm text-gray-500 mt-2">
                              <span>Dhs {min}</span>
                              <span>Dhs {max}</span>
                            </div>


                          </div>
                        );
                      }}
                    />



                  </div>
                </div>

                {/* Best Dishes */}
                <div className="bg-[#FBDFDF] h-[500px] flex flex-col justify-between py-8 p-5 rounded-xl">
                  <p className="font-medium  mb-3">What best describes your restaurant (max.4)</p>
                  {form.formState.errors.restaurantType && (
                    <p className="text-red-500 text-sm mt-1 mb-2">
                      {form.formState.errors.restaurantType.message}
                    </p>
                  )}
                  <div className="grid grid-cols-2 text-[#9B9B9B] font-medium gap-2 text-sm">
                    {bestDishes.map((type, i) => (
                      <label key={i} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id={`type-${type}`}
                          value={type}
                          checked={form.watch('restaurantType')?.includes(type)}
                          onChange={(e) => {
                            const current = form.watch('restaurantType') || [];
                            if (e.target.checked) {
                              if (current.length < 4) {
                                form.setValue('restaurantType', [...current, type]);
                              }
                            } else {
                              form.setValue('restaurantType', current.filter(item => item !== type));
                            }
                          }}
                          className="accent-red-500     h-4 w-4"
                        />
                        {type}
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Describe Restaurant */}
              <div className="bg-[#FBDFDF] h-[250px]  flex flex-col justify-between  py-8 p-5 rounded-xl mb-6">
                <p className="font-medium mb-3">Describe your restaurant</p>

                <textarea
                  {...form.register('description')} // <-- connect to React Hook Form
                  rows={4}
                  placeholder="Write here..."
                  className="w-full border p-3 resize-none rounded-md bg-white"
                />
                {form.formState.errors.description && (
                  <p className="text-red-500 text-sm mt-1">
                    {form.formState.errors.description.message}
                  </p>
                )}
              </div>

              {/* Personality */}
              <div className="bg-[#FBEDDF] flex flex-col justify-between px-6  md:h-[450px] py-8 rounded-xl mb-6">
                <p className="font-medium mb-3">
                  Pick the words that describe your restaurant's personality/vibe
                </p>
                <div className="text-[#9B9B9B] font-medium flex flex-col gap-2">
                  {['Formal & Elegant:', 'Casual & Friendly:', 'Bold & Playful:'].map((category, idx) => (
                    <div key={idx} className="my-4 flex flex-col gap-2">
                      <p className="text-sm mb-2 text-black">{category}</p>
                      <div className="grid grid-cols-2 md:flex gap-4 text-sm">
                        {traits.slice(idx * 8, idx * 8 + 8).map((vibe, i) => (
                          <label key={i} className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              id={`vibe-${vibe}`}
                              value={vibe}
                              checked={form.watch('personalityVibe')?.includes(vibe)}
                              onChange={(e) => {
                                const current = form.watch('personalityVibe') || [];
                                if (e.target.checked) {
                                  form.setValue('personalityVibe', [...current, vibe]);
                                } else {
                                  form.setValue('personalityVibe', current.filter(item => item !== vibe));
                                }
                              }}

                              className="accent-red-500 h-4 w-4"
                            />
                            {vibe}
                            <Error name="personalityVibe" form={form} />

                          </label>

                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center w-full mt-8">
                <button className="px-6 py-2 bg-[#EE3A3D] w-full text-white rounded hover:bg-red-500 cursor-pointer">
                  Save Review and Continue
                </button>
                <Toaster position="bottom-right" toastOptions={{
                  style: {
                    background: "#333",
                    color: "#fff",
                    borderRadius: "8px",
                    padding: "12px 16px",
                    fontSize: "14px",
                  },
                }} />
              </div>
            </div>

          </form>
          {/* <Formtwo formData={formData} handleChange={handleChange}/> */}
          {/* <StepTwo formData={formData} handleChange={handleChange}/> */}

        </div>

        <div className='block md:hidden '>


          {/* <Formtwo formData={formData} handleChange={handleChange}/> */}

        </div>

      </div>

        {/* <div className='flex gap-4 w-full items-center justify-center'>
<button className='bg-[#EE3A3D] hover:bg-red-300 cursor-pointer flex gap-2 items-center text-white px-4 py-2 rounded-md'

onClick={()=>setCurrentPage(false)}>
<Image src={'/assets/Vector.svg'} width={5} height={8} />
    Page1
</button>
<button className='bg-[#EE3A3D] hover:bg-red-300 cursor-pointer flex gap-2 items-center text-white px-4 py-2 rounded-md'

onClick={()=>setCurrentPage(true)}>
    Page2
    <Image src={'/assets/Vector-2.svg'} width={5} height={8} />

</button> */}


      </div>
    </div>
  )
}
export default dashboardinfoform