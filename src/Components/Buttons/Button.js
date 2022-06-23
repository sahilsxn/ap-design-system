import tw, { styled } from 'twin.macro';

const StyledButton = styled.button(({ variant='primary', size='large', inactive=false }) => [
	variant === 'primary' &&
	tw`
        rounded
        text-base
        px-4
        py-2
        hover:shadow-lg
        text-white   
        bg-adp-red
        m-2
    `,
	variant === 'secondary' &&
	tw`
        rounded
        text-sm
        px-5
        py-2
        bg-transparent
        border
        border-adp-red
        text-adp-red 
        hover:shadow-lg
        m-2
    `,
    variant === 'tertiary' &&
	tw`
        rounded
        text-sm
        px-5
        py-2
        bg-transparent
        border
        border-[#999999]
        text-[#1A1A1A]
        hover:shadow-lg
        m-2
    `,
	size === 'small' &&
	tw`
        px-4
        py-2
    `,
	size === 'large' &&
	tw`
        px-4
        py-3
    `,
    variant === 'primary' && inactive &&
    tw`
        text-white
        bg-adp-red-inactive
        cursor-not-allowed
        hover:shadow-none
    `,
    variant === 'secondary' && inactive && 
    tw`
        bg-transparent
        border
        border-adp-red-inactive
        text-adp-red-inactive
        cursor-not-allowed
        hover:shadow-none
    `,
    variant === 'tertiary' && inactive && 
    tw`
        bg-transparent
        border
        border-[#999999]
        text-[#999999]
        cursor-not-allowed
        hover:shadow-none
    `,
])

export const Button = ({ variant, size, inactive, children, ...props }) => {
	return (
		<StyledButton variant={variant} size={size} inactive={inactive} {...props}>
			{children}
		</StyledButton>
	);
}

export const IconButton = ({ variant, size, inactive, children, icon, ...props }) => {
	return (
		<StyledButton variant={variant} size={size} inactive={inactive} {...props}>
			{children}
			{icon}
		</StyledButton>
	);
}