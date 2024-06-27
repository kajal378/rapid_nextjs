"use client"
import React from "react";
import "../../../../../public/sass/dashboard/profile.scss";
import Link from "next/link";
import Sidebar from "@/app/components/sidebar";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from 'next/navigation';

const Profile = () => {
    const router = useRouter();
    return (
        <>
            <section className="db_section profile_section">
                <div className="main_parent">
                    <div className="left_db">
                        <Sidebar />
                    </div>
                    <div className="right_db">
                        <div className="inner_right">
                            <div className="first_name">
                                <Link href="#">profile <FontAwesomeIcon icon={faUser} className="user" /></Link>
                                <Link href="#">profile view</Link>
                            </div>
                            <div className="parent_panel">
                                <div className="panel_1">
                                    <div className="inner_left_2">
                                        <div className="content_left">
                                            Representative Name
                                        </div>
                                    </div>
                                    <div className="inner_right_2">
                                        <div className="content_right">William Henna</div>
                                    </div>
                                </div>
                                <div className="panel_1">
                                    <div className="inner_left_2">
                                        <div className="content_left">
                                            Organization Name
                                        </div>
                                    </div>
                                    <div className="inner_right_2">
                                        <div className="content_right">William Drug Store</div>
                                    </div>
                                </div>
                                <div className="panel_1">
                                    <div className="inner_left_2">
                                        <div className="content_left">
                                            Role in the Organization
                                        </div>

                                    </div>
                                    <div className="inner_right_2">
                                        <div className="content_right">William Drug Store</div>
                                    </div>
                                </div>
                                <div className="panel_1">
                                    <div className="inner_left_2">
                                        <div className="content_left">
                                            Email ID
                                        </div>
                                    </div>
                                    <div className="inner_right_2">
                                        <div className="content_right">jack@mailinator.com</div>
                                    </div>
                                </div>
                                <div className="panel_1">
                                    <div className="inner_left_2">
                                        <div className="content_left">
                                            Contact Number
                                        </div>

                                    </div>
                                    <div className="inner_right_2">
                                        <div className="content_right">+177-778-779</div>
                                    </div>
                                </div>
                                <div className="panel_1">
                                    <div className="inner_left_2">
                                        <div className="content_left">
                                            Gender
                                        </div>

                                    </div>
                                    <div className="inner_right_2">
                                        <div className="content_right">male</div>
                                    </div>
                                </div>
                                <div className="panel_1">
                                    <div className="inner_left_2">
                                        <div className="content_left">
                                            Address
                                        </div>

                                    </div>
                                    <div className="inner_right_2">
                                        <div className="content_right">UAE</div>
                                    </div>
                                </div>
                                <div className="bttn10">
                                    <button type="submit" className="bttn" onClick={() => router.push('/dashboard/profile_1')}>Edit Profile</button>
                                </div>
                            </div>






                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
export default Profile;