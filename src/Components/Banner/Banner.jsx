

const Banner = () => {
    return (
        <div
        className="bg-cover bg-no-repeat rounded-3xl md:w-full h-full md:h-[35.5rem] mb-10"
        style={{
            backgroundImage: 'url(https://i.ibb.co.com/fk8cZvv/kitchen-5055083-1280.jpg)'
        }}
        >
            <div className="w-9/12 mx-auto flex flex-col justify-center items-center text-center h-full space-y-6 py-4">
                <h1 className="font-bold text-white
                md:text-[3.25rem]">
                    Discover an exceptional cooking class tailored for you!
                </h1>
                <p className="text-xs md:text-lg text-white font-semibold ">
                Chef's Table is a culinary platform that brings together a diverse range of chefs and their unique cuisines. It offers a unique dining experience where you can savor delicious dishes from various restaurants, all under one roof.
                </p>
                <div className="flex gap-4 text-xl font-semibold">
                    <button className="btn bg-green-400 rounded-full border-none">Explore Now</button>
                    <button className="btn btn-outline-white hover:bg-green-400 rounded-full border-none">Our Feedback</button>
                </div>

            </div>
            


        </div>
    );
};

export default Banner;