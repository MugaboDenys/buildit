import Card from "./Card";
import icon4 from '../public/Icon4.png'
import icon5 from '../public/Icon5.png'
import icon7 from '../public/Icon7.png'

const Innovation = () => {
    return ( 
        <div className="bg-slate-200 mt-32 pt-32 px-32 h-[80vh]">
            <h2 className="py-10 text-5xl font-bold text-center text-footerbg">Innovative Execution</h2>
            <div className="flex justify-between pt-10">
            <Card link={icon4} title={'Featured Listing'} paragraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}/>
            <Card link={icon5} title={'Available Properties'} paragraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}/>
            <Card link={icon7} title={'In the News'} paragraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}/>

            </div>
        </div>
     );
}
 
export default Innovation;