 /* import Link from "next/Link"  */

 import FormUserInfo from "@/components/FormUserInfo"
 import FormUserTicket from "@/components/FormUserTicket"
 import FormUserServiceEquipment from "@/components/FormUserServiceEquipment"
import FormUserServiceInfo from "@/components/FormUserServiceInfo"

const Formulario = () => {
    return (

        <span>
            <h1>Formulario STL - Demo</h1>
            <FormUserInfo />
            <FormUserTicket/>
            <FormUserServiceEquipment/>
            <FormUserServiceInfo/>
        </span>

    )
  
  }
  
  
  export default Formulario