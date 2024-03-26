import { FloatingLabel, Label, Textarea } from "flowbite-react"
import { PhotoInfo } from "../../components/PhotoInfo"
import { useEffect, useState } from "react";
import { AxiosClientJSON } from "../../config/http-client/axios-client";
import { useParams } from "react-router-dom";
import { FormElastic } from "../../components/FormElastic";

export const ExtraInfo = () => {
    const [extraJson, setExtraJson] = useState({});
    



    const { idExtra } = useParams();
    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await AxiosClientJSON({
                    url: '/api/extras/read',
                    method: 'POST',
                    data: { id: idExtra }
                });
                
                

                setExtraJson(response.data);
               
            } catch (error) {
                // Aquí puedes manejar el error, como mostrar un mensaje de error al usuario
                console.error('Error fetching data:', error);
            }
        };
        fetchData();

    }, []);
    return (
        <>
            <div className="mt-8 h-[80vh] w-full  p-4">
                <div className="flex justify-center h-full w-full">
                <FormElastic key={""} item={{
                        title: "Modificar de Extra",
                        data: [
                            {id:"name" , text: "Nombre" , type:"text" , placeholder:"Alberto" , value : extraJson?.name} ,
                            {id:"description" , text: "Descripcion" , type:"textArea" , placeholder:"Cardenas Herrera" , value:extraJson?.description},
                            {id:"price" , text: "Precio" , type:"tel" , placeholder:"2418342349", value:extraJson?.price},
                            {id:"id" , text: "" , type:"hidden" , placeholder:"" , value : extraJson?.id}

                        ],select:[],
                        form: {
                            method: 'POST',
                            url: '/api/extras/update',
                            headers:{ "Content-Type": "multipart/form-data"},
                            axios:AxiosClientJSON,
                            redirect :`/Extras/Info/${extraJson?.id}`
                        }
                        ,button:{
                            name:"Modificar"
                        }
                    }} />
                    <div className="flex  items-center w-3/4 m-5 p-3">
                        <div className="flex-[2] p-2 m-2">
                            <FloatingLabel variant="outlined" label="Nombre" disabled={true} value={extraJson?.name} />
                            <Textarea id="comment" placeholder="Descripcion" required rows={4} className="mb-3" disabled={true}  value={extraJson?.description}/>
                            <FloatingLabel variant="outlined" label="Precio" disabled={true} value={extraJson?.price} />
                            <FloatingLabel variant="outlined" label="Productos Registrados" disabled={true} value={"5"} />

                        </div>
                        <div className=" flex-[3] h-full m-5 flex flex-col border rounded-lg overflow-hidden">
                           
                                <Label value="Productos Registrados" className="text-1xl text-center p-3 text-white " style={{backgroundColor:'var(--blackLigth)'}} />
                            <div className="overflow-y-scroll">
                                <PhotoInfo item={{urlPhoto:"https://editorialtelevisa.brightspotcdn.com/wp-content/uploads/2019/09/chuleta-cerdo-pimientos-balsamico.jpg",name:"Chuleta",description:"Chuleta es iuna parte sabrosota del ...."}}/>
                                <PhotoInfo item={{urlPhoto:"https://editorialtelevisa.brightspotcdn.com/wp-content/uploads/2019/09/chuleta-cerdo-pimientos-balsamico.jpg",name:"Chuleta",description:"Chuleta es iuna parte sabrosota del ...."}}/>
                                <PhotoInfo item={{urlPhoto:"https://editorialtelevisa.brightspotcdn.com/wp-content/uploads/2019/09/chuleta-cerdo-pimientos-balsamico.jpg",name:"Chuleta",description:"Chuleta es iuna parte sabrosota del ...."}}/>
                                <PhotoInfo item={{urlPhoto:"https://editorialtelevisa.brightspotcdn.com/wp-content/uploads/2019/09/chuleta-cerdo-pimientos-balsamico.jpg",name:"Chuleta",description:"Chuleta es iuna parte sabrosota del ...."}}/>
                                <PhotoInfo item={{urlPhoto:"https://editorialtelevisa.brightspotcdn.com/wp-content/uploads/2019/09/chuleta-cerdo-pimientos-balsamico.jpg",name:"Chuleta",description:"Chuleta es iuna parte sabrosota del ...."}}/>
                                <PhotoInfo item={{urlPhoto:"https://editorialtelevisa.brightspotcdn.com/wp-content/uploads/2019/09/chuleta-cerdo-pimientos-balsamico.jpg",name:"Chuleta",description:"Chuleta es iuna parte sabrosota del ...."}}/>
                                <PhotoInfo item={{urlPhoto:"https://editorialtelevisa.brightspotcdn.com/wp-content/uploads/2019/09/chuleta-cerdo-pimientos-balsamico.jpg",name:"Chuleta",description:"Chuleta es iuna parte sabrosota del ...."}}/>

                            </div>
                        </div>


                    </div>
                </div>



            </div>
        </>
    )
}