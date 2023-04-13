import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faStar, faUser } from "@fortawesome/free-regular-svg-icons";
import moment from "moment";
import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Panel from "../../components/Panel";
import ProfileAvatar from "../../components/Avatar";
import ProfileContactBox from "../../components/ContactBox";
import { getProfile, Profile  } from "./profileSlice";

import "./styles.scss";
import Skeleton from "react-loading-skeleton";
import { showModal } from "../../app/uiSlice";
import { faHome, faMobile, faPhone } from "@fortawesome/free-solid-svg-icons";

const ProfileContainer: FC = () => {
    const dispatch = useAppDispatch();
    const profile: Profile | undefined = useAppSelector(state => state.profile.profileOwner);
    const isLoading: boolean = useAppSelector(state => state.profile.loading);

    useEffect(() => {
        dispatch(getProfile());
    }, []);

    const contactData = [
        {icon: <FontAwesomeIcon icon={faUser} />, contact: profile ? "#" + profile!.id as unknown as string : ''},
        {icon: <FontAwesomeIcon icon={faMobile} />, contact: profile ? profile!.mobile_phone : ''},
        {icon: <FontAwesomeIcon icon={faPhone} />, contact: profile ? profile!.work_phone: ''},
        {icon: <FontAwesomeIcon icon={faHome} />, contact: profile ? profile!.home_phone: ''},
        {icon: <FontAwesomeIcon icon={faEnvelope} />, contact: profile ? profile!.email: ''},
    ];
    const commnicationData = [
        {value: profile ? profile!.activity.sms as unknown as string: '', label: profile ? "sms" : ""},
        {value: profile ? profile!.activity.email as unknown as string: '', label: profile ? "email": ""},
        {value: profile ? profile!.activity.orders as unknown as string: '', label: profile ? "orders" : ""},
    ];
    const smsCarrierStatusData = [
        {value: profile ? profile!.carrier_status.status : '', label: profile ? moment(new Date(profile!.carrier_status.since)).format("MMM ddd, YYYY") : ''},
    ];

    return (
        <>
            <div className="topToolbar">
                <span className="topToolbar__icon"><FontAwesomeIcon icon={faStar} /></span>
                <span className="topToolbar__ownerName">
                    {!isLoading && profile ? `${profile.first_name} ${profile.last_name}` : (<Skeleton height={30} width={100} />)}
                </span>
                <button className="topToolbar__btnNew" onClick={() => dispatch(showModal(true))}>New Order</button>
            </div>
            <div className="profileContainer">
                <div className="profileContainer__avatar">
                    <ProfileAvatar url="/logo192.png" title="men-33" isLoading={isLoading} />
                </div>
                <div className="profileContainer__contact">
                    <ProfileContactBox data={contactData} isLoading={isLoading} />
                </div>
                <div className="profileContainer__communicationActivity">
                    <Panel title="90-Day-Communication-Activity" data={commnicationData} theme="grey" isLoading={isLoading} />
                </div>
                <div className="profileContainer__smsCarrierStatus">
                    <Panel title="SMS Carrier Status" data={smsCarrierStatusData} theme="green" isLoading={isLoading} />
                </div>
            </div>
        </>
    )
}

export default ProfileContainer;