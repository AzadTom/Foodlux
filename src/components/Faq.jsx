import Question from "./Question";

const Faq=()=>{


    

    const faqData = [
        {
          question: "How do I place an order?",
          answer: "To place an order, simply visit our website or mobile app, browse the menu, select your items, and proceed to checkout. Follow the instructions to provide your delivery address and payment details to complete the order."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept various payment methods, including credit/debit cards, digital wallets, and other secure online payment options. Check our website for a list of supported payment methods."
        },
        {
          question: "Can I track my order in real-time?",
          answer: "Yes, you can track your order in real-time using the tracking feature on our website or mobile app. Once your order is confirmed, you'll receive updates on its status, and you can monitor the delivery progress."
        },
        {
          question: "Is there a minimum order amount for delivery?",
          answer: "The minimum order amount for delivery may vary depending on your location and the restaurant. You can find this information on the restaurant's page during the ordering process."
        },
        {
          question: "Can I modify or cancel my order after it's placed?",
          answer: "Unfortunately, once an order is confirmed, it cannot be modified or canceled. Please double-check your order before confirming the purchase. If you encounter any issues, contact our customer support for assistance."
        },
        {
          question: "How do I report an issue with my order?",
          answer: "If you encounter any issues with your order, such as missing items or incorrect items, please contact our customer support immediately. You can find the contact details on our website, and our team will assist you promptly."
        },
        {
          question: "Do you offer contactless delivery?",
          answer: "Yes, we offer contactless delivery to ensure the safety of our customers and delivery partners. You can select this option during the checkout process, and the delivery will be left at your doorstep."
        },
        {
          question: "Are there any delivery fees?",
          answer: "Delivery fees may apply and vary depending on your location and the restaurant. The delivery fee will be displayed during the checkout process before you confirm your order."
        },
        {
          question: "How can I provide feedback on my experience?",
          answer: "We appreciate your feedback! You can leave a review on our website or app after completing your order. Additionally, you can contact our customer support to share your feedback and help us improve our service."
        },
        {
          question: "Do you offer discounts or promotions?",
          answer: "Yes, we frequently run promotions and discounts. Keep an eye on our website, social media channels, and newsletters for the latest offers and promo codes."
        }
      ];

    return(
        <>
        <section className="flex justify-center items-center p-4 ">
           <div className="flex flex-col justify-between items-center max-w-[1000px] w-full md:flex-row gap-4">
           <div className="bg-[var(--neutralblack)] p-8 text-[var(--primarycolortext)] flex flex-col gap-8 ">
                <h2 className="text-3xl">FAQS</h2>
                <div className="text-3xl">
                <h3>Frequently asked</h3>
                <h3>questions</h3>
                </div>
                <div className="flex flex-col gap-4">
                <p className="text-[var(--secondarytext)] text-sm font-thin">Have question you want answer to?</p>
                <button className="text-[var(--primarycolortext)] bg-[var(--primarycolor)] font-thin text-sm px-4 py-2">see more</button>
                </div>
            </div>
            <div className="text-[var(--primarycolortext)] flex flex-col gap-4  mt-4 max-w-[320px] sm:max-w-[600px]">
              {faqData.map((item)=>(

                  <Question {...item} key={item.id}/>

              ))}
                
            </div>
           </div>
        </section>
        </>
    )

}

export default Faq;