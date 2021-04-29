import React from 'react';
import { useForm } from "react-hook-form";
import './PostRequest.css';

const PostRequest = () => {
      const { register, handleSubmit, formState: { errors } } = useForm();
      const onSubmit = data => console.log(data);
      return (
            <div className="container post-request-form">
                  <h3 className="text-center py-3">Post your blood request</h3>
                  <hr />
                  <form className="row" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group col-4">
                              <label htmlFor="firstName">Name</label>
                              <input type="text" {...register("firstName", { required: true })} placeholder="first name" className="form-control w-100" />
                              {errors.firstName && <small className="text-danger">First name is required</small>}
                        </div>
                        <div className="form-group col-4">
                              <label htmlFor="mobile">Mobile</label>
                              <input type="number" {...register("mobile", { required: true })} placeholder="Mobile" className="form-control w-100" />
                              {errors.mobile && <small className="text-danger">mobile number is required</small>}
                        </div>
                        <div className="form-group col-4">
                              <label htmlFor="alterMobile">Alter Mobile</label>
                              <input type="number" {...register("alterMobile", { required: true })} placeholder="Alternative Mobile" className="form-control w-100" />
                              {errors.alterMobile && <small className="text-danger">Alternative Mobile is required</small>}
                        </div>
                        <div className="form-group col-4">
                              <label htmlFor="email">Email</label>
                              <input type="email" {...register("email", { required: true })} placeholder="Email" className="form-control w-100" />
                              {errors.email && <small className="text-danger">email is required</small>}
                        </div>
                        <div className="form-group col-4">
                              <label htmlFor="address">Address</label>
                              <input {...register("address", { required: true })} placeholder="Address" className="form-control w-100" />
                              {errors.address && <small className="text-danger">Address is required</small>}
                        </div>
                        <div className="form-group col-4">
                              <label htmlFor="dateOfBirth">Date of Birth</label>
                              <input type="date" {...register("dateOfBirth", { required: true })} placeholder="Date Of Birth" className="form-control w-100" />
                              {errors.dateOfBirth && <small className="text-danger">Date of birth is required</small>}
                        </div>
                        <div className="form-group col-3">
                              <label htmlFor="weight">weight</label>
                              <input type="number" {...register("weight", { required: true })} placeholder="Weight Kg" className="form-control w-100" />
                              {errors.weight && <small className="text-danger">Weight is required</small>}
                        </div>

                        <div className="col-md-3 from-group">
                              <label htmlFor="weight">Gender</label>
                              <select {...register("gender", { required: true })} className="form-control">
                                    <option value="female">female</option>
                                    <option value="male">male</option>
                                    <option value="other">other</option>
                              </select>
                              {errors.gender && <small className="text-danger">Gender is required</small>}
                        </div>
                        <div className="col-md-3 from-group">
                              <label htmlFor="weight">Blood Group</label>
                              <select {...register("bloodGroup", { required: true })} className="form-control">
                                    <option value="A+">A+</option>
                                    <option value="B+">B+</option>
                                    <option value="AB+">AB+</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                    <option value="AB-">AB-</option>
                              </select>
                              {errors.bloodGroup && <small className="text-danger">bloodGroup is required</small>}
                        </div>
                        <div className="col-md-3 from-group">
                              <label htmlFor="weight">Relegion</label>
                              <select {...register("religion", { required: true })} className="form-control">
                                    <option value="Islam">Islam</option>
                                    <option value="Hindu">Hindu</option>
                                    <option value="Kristian">Kristian</option>
                                    <option value="Boddo">Boddo</option>
                              </select>
                              {errors.religion && <small className="text-danger">Gender is required</small>}
                        </div>

                        <div className="p-3">
                              <input type="submit" />
                        </div>
                  </form>
            </div>
      );
};

export default PostRequest;