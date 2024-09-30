"use client";
import { useState } from "react";

import { Input } from "ui/Input";

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import "react-multi-date-picker/styles/colors/green.css"

type BirthDateInputParams = {
	canChangeData: boolean,
	value: any,
	setValue: any
}


export default function BirthDateInput({ canChangeData, value, setValue }: BirthDateInputParams) {
	
	
	
	const changeHandler = (event: any) => {
		const date = new Date(event);
		setValue(date);
	}
	
	
	return (
		<DatePicker
			render={<CustomInput value={value} onChange={changeHandler} canChangeData={canChangeData} />}
			renderButton={(direction: any, handleClick: any) => (
				<button className="mx-2" onClick={handleClick}>
					{direction === "right" ? (
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="#417F56"/>
							<path d="M13.9995 17.78C13.8729 17.78 13.7462 17.7333 13.6462 17.6333L9.29953 13.2867C8.59286 12.58 8.59286 11.42 9.29953 10.7133L13.6462 6.36668C13.8395 6.17335 14.1595 6.17335 14.3529 6.36668C14.5462 6.56001 14.5462 6.88001 14.3529 7.07335L10.0062 11.42C9.6862 11.74 9.6862 12.26 10.0062 12.58L14.3529 16.9267C14.5462 17.12 14.5462 17.44 14.3529 17.6333C14.2529 17.7267 14.1262 17.78 13.9995 17.78Z" fill="#417F56"/>
						</svg>
					) : (
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="#417F56"/>
							<path d="M9.93974 17.78C9.81307 17.78 9.68641 17.7333 9.58641 17.6333C9.39307 17.44 9.39307 17.12 9.58641 16.9267L13.9331 12.58C14.2531 12.26 14.2531 11.74 13.9331 11.42L9.58641 7.07335C9.39307 6.88001 9.39307 6.56001 9.58641 6.36668C9.77974 6.17335 10.0997 6.17335 10.2931 6.36668L14.6397 10.7133C14.9797 11.0533 15.1731 11.5133 15.1731 12C15.1731 12.4867 14.9864 12.9467 14.6397 13.2867L10.2931 17.6333C10.1931 17.7267 10.0664 17.78 9.93974 17.78Z" fill="#417F56"/>
						</svg>
					)}
				</button>
			)}
			className="green"
			calendar={persian}
			locale={persian_fa}
			calendarPosition="bottom-right"
			value={value}
			onChange={(event) => changeHandler(event)}
		/>
	)
}


function CustomInput({ onFocus, value, onChange, canChangeData }: any) {
  
	return <Input
		disabled={!canChangeData}
		className={canChangeData ? "border-text" : ""}
		onFocus={onFocus}
		value={value}
		onChange={onChange}
	/>
}