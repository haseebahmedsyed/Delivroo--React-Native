export default {
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name:"name",
      title:"Dish name",
      type:"string",
      validation:(Rule)=> Rule.required()
    },
    {
      name:"short_description",
      title:"Short Description",
      type:"string",
      validation:(Rule)=> Rule.max(200)
    },
    {
      name:"price",
      title:"PRICE OF DISH IN gbp",
      type:"number",
    },
    {
      name:"image",
      title:"Image of dish",
      type:"image",
    },
  ]
}
