const sampleListings = [
  {
    title: "Cozy Mountain Cabin",
    description: "A peaceful wooden cabin located in the foothills with scenic views.",
    image: "https://images.unsplash.com/photo-1634849663266-ade7df369121?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 120,
    location: "Manali",
    country: "India"
  },
  {
    title: "Modern City Apartment",
    description: "A fully furnished 2BHK apartment in the heart of the city.",
    image: "https://images.unsplash.com/photo-1708067077797-74f83eaa8231?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 250,
    location: "Bengaluru",
    country: "India"
  },
  {
    title: "Beachfront Villa",
    description: "Luxurious villa with private beach access and ocean view.",
    image: "https://plus.unsplash.com/premium_photo-1681922761648-d5e2c3972982?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 450,
    location: "Goa",
    country: "India"
  },
  {
    title: "Rustic Countryside House",
    description: "Charming countryside home surrounded by farms and greenery.",
    image: "https://images.unsplash.com/photo-1709138376162-793a9928a2fe?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 90,
    location: "Nainital",
    country: "India"
  },
  {
    title: "Lakeview Cottage",
    description: "Cottage with a breathtaking view of the lake and hills.",
    image: "https://images.unsplash.com/photo-1646912705137-f8f36d487848?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 150,
    location: "Udaipur",
    country: "India"
  },
  {
    title: "Desert Safari Camp",
    description: "Traditional desert tent experience with camel rides.",
    image: "https://plus.unsplash.com/premium_photo-1664302914005-c1eecfeaf05d?q=80&w=879&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 70,
    location: "Jaisalmer",
    country: "India"
  },
  {
    title: "Snowy Chalet",
    description: "Warm and cozy chalet located in a snowy valley.",
    image: "https://images.unsplash.com/photo-1610530531783-56a4e92a3305?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 200,
    location: "Shimla",
    country: "India"
  },
  {
    title: "Luxury Resort Suite",
    description: "Spacious suite with pool access and spa facilities.",
    image: "https://images.unsplash.com/photo-1726000127379-9ef47b86a5e4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 500,
    location: "Kerala",
    country: "India"
  },
  {
    title: "Historic Palace Room",
    description: "Stay in a heritage palace with royal architecture.",
    image: "https://images.unsplash.com/photo-1701087366618-112f1b333a9f?q=80&w=1181&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 350,
    location: "Jaipur",
    country: "India"
  },
  {
    title: "Forest Treehouse",
    description: "Unique treehouse stay surrounded by wildlife.",
    image: "https://plus.unsplash.com/premium_photo-1686090450791-e0ebe58d3064?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 180,
    location: "Meghalaya",
    country: "India"
  },
   {
    title: "City Studio Apartment",
    description: "Compact studio apartment in a bustling city area.",
    image: "https://images.unsplash.com/photo-1706200234277-3586cd003ba3?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1600,
    location: "Delhi",
    country: "India"
  },
  {
    title: "Seaside Villa",
    description: "Luxury villa right on the seashore with private beach access.",
    image: "https://plus.unsplash.com/premium_photo-1723823034538-7597ffd01909?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 4500,
    location: "Kerala",
    country: "India"
  },
  {
    title: "Jungle Lodge",
    description: "Lodge in the middle of the jungle, ideal for adventure seekers.",
    image: "https://plus.unsplash.com/premium_photo-1697730270201-bdfc5b81a675?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 2100,
    location: "Madhya Pradesh",
    country: "India"
  },
  {
    title: "Snowy Chalet",
    description: "Chalet in snowy mountains, perfect for winter sports and cozy evenings.",
    image: "https://images.unsplash.com/photo-1649014232316-d1878df4cdaf?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 2800,
    location: "Shimla",
    country: "India"
  },
  {
    title: "Countryside Farmhouse",
    description: "Traditional farmhouse surrounded by fields and farm animals.",
    image: "https://plus.unsplash.com/premium_photo-1677735108001-cd9b99efd5ff?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1700,
    location: "Punjab",
    country: "India"
  },
  {
    title: "Rooftop Apartment",
    description: "Apartment with a spacious rooftop and city skyline views.",
    image: "https://images.unsplash.com/photo-1564951614469-b81f54838cbb?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1900,
    location: "Hyderabad",
    country: "India"
  },
  {
    title: "Forest Treehouse",
    description: "Unique treehouse in the forest, perfect for a romantic getaway.",
    image: "https://images.unsplash.com/photo-1618767689136-057b06a24dda?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 2300,
    location: "Coorg",
    country: "India"
  },
  {
    title: "Beachfront Cabin",
    description: "Cabin with direct access to the beach and stunning sunsets.",
    image: "https://images.unsplash.com/photo-1607889040818-a367db018339?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 2700,
    location: "Andaman",
    country: "India"
  },
  {
    title: "Mountain Lodge",
    description: "Lodge in the mountains with modern amenities and hiking trails nearby.",
    image: "https://images.unsplash.com/photo-1602436324859-62a81466e723?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 2400,
    location: "Sikkim",
    country: "India"
  },
  {
    title: "Riverside Retreat",
    description: "Retreat along the riverbank with outdoor activities and bonfires.",
    image: "https://images.unsplash.com/photo-1722480465825-6d5b00ce2ae9?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 2000,
    location: "Uttarakhand",
    country: "India"
  },
  {
    title: "Luxury Villa",
    description: "Modern villa with infinity pool and private garden.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 5500,
    location: "Goa",
    country: "India"
  },
  {
    title: "Countryside Cabin",
    description: "Cozy cabin surrounded by nature, perfect for a peaceful weekend.",
    image: "https://images.unsplash.com/photo-1725138187136-790dc99ed924?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1400,
    location: "Kumaon",
    country: "India"
  },
  {
    title: "Urban Loft",
    description: "Spacious loft apartment in the city with modern interiors.",
    image: "https://plus.unsplash.com/premium_photo-1756181211510-76ace797700d?q=80&w=1098&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 2100,
    location: "Pune",
    country: "India"
  },
  {
    title: "Lakefront Cottage",
    description: "Cottage by the lake with stunning sunrise views and boating facilities.",
    image: "https://images.unsplash.com/photo-1668293498099-c6875290e924?q=80&w=719&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 2600,
    location: "Kashmir",
    country: "India"
  }
];

module.exports = {data : sampleListings};
