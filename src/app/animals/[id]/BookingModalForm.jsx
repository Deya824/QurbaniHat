"use client";

import toast from "react-hot-toast";

const BookingModalForm = ({ user, animalName, animalType }) => {
    const handleSubmit = (e) => {
        e.preventDefault(); 
        
        
        toast.success(`Booking confirmed for ${animalName}!`);
        
        
        e.target.reset();
        
        // 3. Close the DaisyUI modal automatically using its checkbox ID
        const modalCheckbox = document.getElementById("booking_modal");
        if (modalCheckbox) {
            modalCheckbox.checked = false;
        }
    };

    return (
        <>
          
            <label htmlFor="booking_modal" className="w-full inline-block text-center cursor-pointer rounded-lg bg-emerald-600 px-4 py-3 font-semibold text-white transition-colors hover:bg-emerald-700 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
                Book the {animalType}
            </label>

           
            <input type="checkbox" id="booking_modal" className="modal-toggle" />
            
            <div className="modal" role="dialog">
                <div className="modal-box bg-white border border-emerald-100">
                    <h3 className="text-xl font-bold text-emerald-950 mb-4">Secure {animalName}</h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label className="block text-sm font-medium text-emerald-900 mb-1">Full Name</label>
                                <input required type="text" name="name" defaultValue={user?.name || ""} className="w-full rounded-lg border border-emerald-200 px-4 py-2 focus:border-emerald-500 focus:outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-emerald-900 mb-1">Email</label>
                                <input required type="email" name="email" defaultValue={user?.email || ""} className="w-full rounded-lg border border-emerald-200 px-4 py-2 focus:border-emerald-500 focus:outline-none" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-emerald-900 mb-1">Phone Number</label>
                            <input required type="tel" name="phone" className="w-full rounded-lg border border-emerald-200 px-4 py-2 focus:border-emerald-500 focus:outline-none" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-emerald-900 mb-1">Delivery Address</label>
                            <textarea required rows="3" name="address" className="w-full rounded-lg border border-emerald-200 px-4 py-2 focus:border-emerald-500 focus:outline-none resize-none"></textarea>
                        </div>

                       
                        <div className="modal-action mt-6">
                            <label htmlFor="booking_modal" className="btn btn-ghost text-emerald-800 hover:bg-emerald-50 border border-emerald-200">Cancel</label>
                            <button type="submit" className="btn border-none bg-emerald-600 text-white hover:bg-emerald-700">Confirm Booking</button>
                        </div>
                    </form>
                </div>
              
                <label className="modal-backdrop" htmlFor="booking_modal">Close</label>
            </div>
        </>
    );
};

export default BookingModalForm;