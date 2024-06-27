"use client"
import React from "react";
import Image from "next/image";
import pic2 from '../../../public/images/icon_image.png';
import "../../../public/sass/dashboard/dashboard.scss";
import Link from "next/link";
import { faBlog, faHeart, faLock, faPlusSquare, faSignOutAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
    return (
        <>
                        <div className="left_parent">
                            <div className="pic2">
                                <Image
                                    src={pic2}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="link_list">
                                <h5>Dianne Jane</h5>
                            </div>
                            <div className="menu_bar">
                                <ul className="barss">
                                    <li className="active">
                                        <Link href="/dashboard/profile"><div className="iconss"><FontAwesomeIcon icon={faUser} /></div>
                                            <div className="profile_name">
                                                Profile
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/dashboard/create_blog"><div className="iconss"><FontAwesomeIcon icon={faPlusSquare} /></div>
                                            <div className="profile_name">
                                                Create blog
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/dashboard/blog"><div className="iconss"><FontAwesomeIcon icon={faBlog} /></div>
                                            <div className="profile_name">
                                                Blogs
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/dashboard/wishlist"><div className="iconss"><FontAwesomeIcon icon={faHeart} /></div>
                                            <div className="profile_name">
                                                My Whishlist
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/dashboard/change_password"><div className="iconss"><FontAwesomeIcon icon={faLock} /></div>
                                            <div className="profile_name">
                                                Change Password
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/home"><div className="iconss"><FontAwesomeIcon icon={faSignOutAlt} /></div>
                                            <div className="profile_name">
                                                Logout
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
        </>
    )
}
export default Sidebar;