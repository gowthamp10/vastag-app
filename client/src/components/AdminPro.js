import React,{useState,useEffect} from "react";
import Card from "react-bootstrap/Card/"
import Button from "react-bootstrap/Button/"
import  Modal  from "react-bootstrap/Modal";


function MyVerticallyCenteredModal(props) {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                {props.item.name}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4>Details</h4>
            <ul>
                <li>Phone Number : {props.item.phoneNo}</li>
                <li>Email : {props.item.email}</li>
                <li>Address : {props.item.address}</li>
                <li>City : {props.item.city}</li>      
                <li>State : {props.item.state}</li>
                <li>Gender : {props.item.gender}</li>
                <li>Professional:{props.item.profession}</li>
                <li>Date of Registration : {props.item.date}</li>


            </ul>
        </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
                <Button variant="success">Verified</Button>
                <Button variant="danger">Decline</Button>

            </Modal.Footer>
        </Modal>
    );
}
const ProCards=(props)=>{
    const [modalShow, setModalShow] = useState(false);
    
    
        return(
            <Card>
                <Card.Body >
                    <Card.Title>{props.item.name}</Card.Title>
                    <Card.Text>Email: {props.item.email}</Card.Text>
                    <Card.Text>Phone Number: {props.item.phoneNo}</Card.Text>
                    <Button variant="primary" onClick={() => setModalShow(true)}>More Information</Button>
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        item = {props.item}
                    />
                </Card.Body>
            </Card>
        );
    }


const AdminPro = () => {
    var [userData, setUserData] = useState("");

 useEffect(()=>{
 if(userData===""){
           async function showAdminCus() {
        
        try {
            const res = await  fetch('/admin/proVerify',{
                method:"GET",
                headers:{
                    Accept:"application/json",
                   "Content-Type":"application/json",
                },
                credentials:"include"
            })
           
            const data = await res.json();
            setUserData(data)

        } catch (error) {
            console.log(error)
        }
    }
    showAdminCus()
 }else{
    // console.log(userData)
    // for (let i in userData){
    //     console.log(userData[i].name)  
    // }
    
 
 }},[])
 var arr  = Array()
 for(let i  = 0 ;i<userData.length;i++){
    arr.push(userData[i])
 }
 arr.reverse();
//  console.log(arr)
 const proCards = arr.map(item=>{
    return( <ProCards
        key={item._id}
        item={item}
    />)
 })
    return (
        <div className="customer-cards">
            {proCards}

        </div>
    )
}

export default AdminPro