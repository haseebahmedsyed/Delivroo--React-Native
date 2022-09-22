export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: "name",
      type: "string",
      title: "Restaurant Name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Short description",
      validation: (Rule) => Rule.max(200),
    },
    
    {
      name: "image",
      type: "image",
      title: "Image of restaurant",
    },
    {
      name: "lat",
      type: "number",
      title: "Latitude of resgtaurant",
    },
    {
      name: "long",
      type: "number",
      title: "Longitude of restaurant",
    },
    {
      name: "address",
      type: "string",
      title: "Address of restaurant",
      validation:(Rule)=>Rule.required()
    },
    {
      name:"rating",
      type:"number",
      title:"Enter the rating from 1-5.",
      validation:(Rule)=>
      Rule.required().
      min(1).
      max(5).
      error("Please enter a value between 1-5.")
    },
    {
      name:"type",
      title:"Category",
      type:"reference",
      to:[{type:"category"}],
      validation:(Rule)=>Rule.required()
    },
    {
      name:"dishes",
      type:"array",
      title:"Dishes",
      of:[{type:"reference",to:[{type:"dish"}]}]
    }

  ]
}
