
import { useState } from "react";
export default function Card() {
    const [card, setValue] = useState({ CardNo: "", expiry: "" })

    const CardNumber = (e) => {
        const target = e.target;
        const value = target.value;


        const cardNumber = value.replace(/\D/g, "");

        const exactCardNo = cardNumber
            .match(/.{1,4}/g) // This splits the digits into chunks of 4
            ?.join("-")       // Joins the chunks with hyphens
            .substring(0, 19); // Limit to 19 characters (16 digits + 3 hyphens)
        setValue((prev) => { return ({ ...prev, CardNo: exactCardNo }) })

    }

    function ExpirationDate(e) {
        const target = e.target;
        const Expiry = target.value;
        //remove all non numeric value
        const expiryDigitsOnly = Expiry.replace(/\D/g, "");
        const ExpiryFormatt = expiryDigitsOnly.substring(0, 2) + (expiryDigitsOnly.length > 2 ? "/" : "") + expiryDigitsOnly.substring(2, 4);
        setValue((prev) => { return { ...prev, expiry: ExpiryFormatt } });

    }
    return (
        <div>
            {/**Card */}
             <div className=" h-[auto] w-[33vw] rounded-xl bg-[#727272] flex-row  ">
                <div className="text-[1.6em] font-sans font-medium h-[10vh] w-[33vw] p-[20px] border-2 border-[#ccff00] rounded-t-lg">Credit Card</div>
                <div className="h-[30vh] w-[31vw] pl-[30px] pr-[30px] mt-[4vmin] flex-row">
                    {/**credict card logic */}
                    <input type="text" min={1} onChange={(e) => { CardNumber(e) }} className="h-[6vmin] w-[28vw] text-[1.5em] rounded-lg mb-5 font-semibold font-cursive  p-[10px]" value={card.CardNo} placeholder="Credit Card Number" />
                    {/**expire & */}
                    <div className="flex gap-[10px] mb-[20px]">
                        {/**expiry logic */}
                        <input type="text" className="h-[5vmin] w-[28vmin] p-[20px] font-serif text-[1.6em] outline-green-500 rounded-lg" onChange={ExpirationDate} placeholder="MM/YY" value={card.expiry} />

                        {/**cvv Logic */}
                        <input type="password" max={3} className="h-[5vmin] p-[20px] font-serif text-[1.6em] outline-green-500 w-[29vmin] rounded-lg" placeholder="CVV" />
                    </div>

                    <input tupe="text" placeholder="Card Holders Name"  className="h-[5vmin] p-[20px] font-serif text-[1.6em] outline-green-500 w-[58vmin] rounded-lg" />
                </div>

            </div>
        </div>

    )
}