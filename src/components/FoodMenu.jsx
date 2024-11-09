import React from "react"
import { Coffee, CupSoda, Dessert, Soup } from "lucide-react"

export default function FoodMenu() {
  const menuItems = {
    coffee: [
      { name: "Espresso", price: "$5" },
      { name: "Double Espresso", price: "$5" },
      { name: "Latte", price: "$5" },
      { name: "Americano", price: "$5" },
      { name: "Macchiato", price: "$5" },
      { name: "Flat White", price: "$5" },
      { name: "Cappuccino", price: "$5" },
    ],
    tea: [
      { name: "Lemon Tea", price: "$5" },
      { name: "Mango Tea", price: "$5" },
      { name: "Jasmine", price: "$5" },
      { name: "Green Tea", price: "$5" },
      { name: "Mint Tea", price: "$5" },
    ],
    nonCoffee: [
      { name: "Hot Chocolate", price: "$5" },
      { name: "Milkshake", price: "$5" },
      { name: "Smoothie", price: "$5" },
      { name: "Lemonade", price: "$5" },
      { name: "Vanilla Milkshake", price: "$5" },
    ],
    desserts: [
      { name: "Strawberry Waffle", price: "$5" },
      { name: "Cinnamon Roll", price: "$5" },
      { name: "Lemon Pie", price: "$5" },
      { name: "Croissant", price: "$5" },
      { name: "Chocolate Waffle", price: "$5" },
      { name: "Brownies", price: "$5" },
      { name: "Cheesecake", price: "$5" },
      { name: "Chocolate Muffin", price: "$5" },
    ],
  }

  return (
   <>
   <div className="flex">
    <div>
        <a href="">home</a>
        <a href="">home</a>
        <a href="">home</a>
    </div>
    <div>
        <a href="">home</a>
        <a href="">home</a>
        <a href="">home</a>
    </div>
   </div>
    <div className="min-h-screen bg-[#f9f3e8] p-8 font-serif">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <Coffee className="h-8 w-8 text-[#5C4033]" />
            <h1 className="text-3xl font-bold text-[#5C4033]">BORCELLE</h1>
          </div>
          <h2 className="mb-4 font-['Playfair_Display'] text-5xl text-[#5C4033]">Coffee Shop</h2>
          <h3 className="text-7xl font-bold text-[#3C2A21]">MENU</h3>
        </div>

        {/* <div className="mb-12 flex justify-end">
          <div className="overflow-hidden rounded-tl-[100px] rounded-bl-[100px]">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/food_menu%20(1)-05cNzs0SCP1MfTLEK8czNMLdPRZ9Mv.png"
              alt="Coffee and pastry"
              className="h-[200px] w-[300px] object-cover"
            />
          </div>
        </div> */}

        <div className="grid gap-12">
          <section>
            <div className="mb-4 flex items-center gap-2 border-b-2 border-[#5C4033] pb-2">
              <Coffee className="h-6 w-6 text-[#5C4033]" />
              <h4 className="text-2xl font-bold text-[#5C4033]">COFFEE</h4>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {menuItems.coffee.map((item) => (
                <div key={item.name} className="flex justify-between">
                  <span className="text-lg text-[#5C4033]">{item.name}</span>
                  <span className="text-lg text-[#5C4033]">{item.price}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="mb-4 flex items-center gap-2 border-b-2 border-[#5C4033] pb-2">
              <Soup className="h-6 w-6 text-[#5C4033]" />
              <h4 className="text-2xl font-bold text-[#5C4033]">TEA</h4>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {menuItems.tea.map((item) => (
                <div key={item.name} className="flex justify-between">
                  <span className="text-lg text-[#5C4033]">{item.name}</span>
                  <span className="text-lg text-[#5C4033]">{item.price}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="mb-4 flex items-center gap-2 border-b-2 border-[#5C4033] pb-2">
              <CupSoda className="h-6 w-6 text-[#5C4033]" />
              <h4 className="text-2xl font-bold text-[#5C4033]">NON-COFFEE</h4>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {menuItems.nonCoffee.map((item) => (
                <div key={item.name} className="flex justify-between">
                  <span className="text-lg text-[#5C4033]">{item.name}</span>
                  <span className="text-lg text-[#5C4033]">{item.price}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="mb-4 flex items-center gap-2 border-b-2 border-[#5C4033] pb-2">
              <Dessert className="h-6 w-6 text-[#5C4033]" />
              <h4 className="text-2xl font-bold text-[#5C4033]">DESSERTS</h4>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {menuItems.desserts.map((item) => (
                <div key={item.name} className="flex justify-between">
                  <span className="text-lg text-[#5C4033]">{item.name}</span>
                  <span className="text-lg text-[#5C4033]">{item.price}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
   </>
  )
}