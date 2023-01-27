import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { formSchema } from '../../Schema/formSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios'
import './Add.scss'
const Add = () => {
    const[input,setInput]=useState({
        teacherName: "",
        teacherImg: "",
        price: "",
        courseName:"",
        url: ""
      

    })


     //get data
const getData=async()=>{
    const res=await axios.get("http://localhost:8080/courses")
    console.log(res.data);
}
//post 
const addData=()=>{
    if(!input.url ||!input.teacherName || !input.teacherImg || !input.price   || !input.courseName)return
    axios.post("http://localhost:8080/courses",input)
setInput({
    teacherName: "",
    teacherImg: "",
    price: "",
    courseName:"",
    url: "",
})
getData()
}

 //
 const handleChange=(e)=>{
    setInput({...input,[e.target.name]:e.target.value})
 }

//hook form
    const {
        register,
        handleSubmit,
    
        formState: { errors }
      } = useForm({resolver:yupResolver(formSchema)});
      const onSubmit = (data) => {
        console.log(data);
        addData()
      }; 
    
   

  return (
<div className="addForm">
<form onSubmit={handleSubmit(onSubmit)}>
     
<h1>Add Data</h1>
      <input {...register("url", { required: true })}  onChange={handleChange} name="url"  type="url" value={input.url}/>
      {errors.url && <span>{errors.url.message}</span>}

      <input {...register("courseName", { required: true })}  onChange={handleChange} name="courseName"   value={input.courseName}/>
      {errors.courseName && <span>{errors.courseName.message}</span>}

      <input {...register("teacherName", { required: true })}  onChange={handleChange} name="teacherName"   value={input.teacherName}/>
      {errors.teacherName && <span>{errors.teacherName.message}</span>}

      <input {...register("teacherImg", { required: true })} type='url'  onChange={handleChange} name="teacherImg"   value={input.teacherImg}/>
      {errors.teacherImg && <span>{errors.teacherImg.message}</span>}

      <input {...register("price", { required: true })}  onChange={handleChange} name="price"   value={input.price}/>
      {errors.price && <span>{errors.price.message}</span>}

      <input type="submit" />
    </form>
</div>
  )
}

export default Add