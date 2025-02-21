
import { Button } from "antd";
import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from "../../redux/features/admin/productManagement.Api";
import Card from "../../components/Card/Card";
import TestiCarosel from "../../components/Testimonial/TestiCarosel";
import Footer from "../../components/footer/Footer";

const Home = () => {
    const { data: products } = useGetAllProductsQuery(undefined)
    const mainData = products?.data?.slice(0,8)
    // console.log(mainData);
    return (
        <div>
            <div className="lg:mx-20 lg:mb-10">
                <div>
                    <h1 className="text-4xl font-bold">Fearured Bike</h1>
                    <div className="grid grid-cols-4 my-5 gap-10">
                        {
                            mainData?.map((item) => (
                                <Card key={item.name} item={item}></Card>
                            ))
                        }

                    </div>
                    <div className="flex justify-center">
                        <div className=" flex justify-center w-[120px]  rounded-full items-center">
                            <Link to='/all-products'>
                                <Button className="focus:outline-none px-3 py-2" style={{ border: '1px solid #38bdf8', backgroundColor: '#38bdf8', color: 'white', fontSize: '13px', borderRadius: '100px 100px 100px 100px', padding: '20px 25px 20px 25px' }}>See All</Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-3xl font-bold mb-6">What Our Customer Says </h1>
                </div>
                <div className="">
                    <TestiCarosel />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;