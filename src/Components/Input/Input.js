import tw, { styled } from 'twin.macro';
import React from 'react';

const StyledInput = styled.input(({ variant='primary', size='large', disabled }) => [
	variant === 'primary' &&
	tw`
		border
		border-black-40
		rounded
		focus:outline-none
		focus:border-black-90 
		focus:border-[1.5px]
		text-black-90
		placeholder-black-40
		w-full
		mb-2
	`,
	disabled &&
	tw`
		border-[.5px]
		border-black-40
		rounded
		focus:outline-none
		text-black-40
		placeholder-black-40
		w-full
		mb-2
		cursor-not-allowed
		bg-none
	`,
	variant === 'login' &&
		tw`
			border-2 
			border-gray-200
			py-2 px-3 
			focus:outline-none
			focus:border-gray-300
			w-full
			h-12
			text-black
    	`,
	variant === 'login-rounded' &&
		tw`
			border-2 
			border-gray-200
			rounded 
			py-2 px-3 
			focus:outline-none
			focus:border-gray-300
			w-full
			h-12
			text-black
    	`,
	size === 'large' &&
		tw`
			px-3
			py-2.5
			h-12
			text-base
		`,
	size === 'small' &&
		tw`
			px-2.5
			py-2.5
			h-10
			text-sm
		`
]);

export const InputTextWithRef = React.forwardRef(
	({ variant, size, error = '', ...props }, ref) => {
		return (
			<div>
				<StyledInput variant={variant} size={size} ref={ref} {...props}></StyledInput>
			</div>
		);
	}
);

export const IconInputTextWithRef = React.forwardRef(
	({ variant, size, icon, error = '', ...props }, ref) => {
		return (
			<div>
				<div className="flex">
					<div className="flex justify-center items-center bg-black-10 px-5 text-black-60">
						{icon}
					</div>
					<StyledInput variant={variant} size={size} ref={ref} {...props}></StyledInput>
				</div>
				<div className="text-adp-red text-xs mt-2">{error}</div>
			</div>
		);
	}
);

InputTextWithRef.displayName = 'InputTextWithRef';
IconInputTextWithRef.displayName = 'IconInputTextWithRef';