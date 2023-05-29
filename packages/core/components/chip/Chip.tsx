import './Chip.scss'
import { defineComponent, PropType } from 'vue'

const chipVariants = [
	'default',
	'primary',
	'success',
	'warning',
	'error',
] as const
export type ChipPropsVariant = (typeof chipVariants)[number]

const chipShapes = ['rectangle', 'rounded'] as const
export type ChipPropsShape = (typeof chipShapes)[number]

const chipSizes = ['small', 'medium', 'big'] as const
export type ChipPropsSizes = (typeof chipSizes)[number]

export default defineComponent({
	name: 'Chip',
	props: {
		shape: {
			type: String as PropType<ChipPropsShape>,
			default: 'rectangle',
			validator: (value: ChipPropsShape) => chipShapes.includes(value),
		},
		variant: {
			type: String as PropType<ChipPropsVariant>,
			default: 'default',
			validator: (value: ChipPropsVariant) =>
				chipVariants.includes(value),
		},
		size: {
			type: String as PropType<ChipPropsSizes>,
			default: 'medium',
			validator: (value: ChipPropsSizes) => chipSizes.includes(value),
		},
		isDisabled: {
			type: Boolean,
			default: false,
		},
	},
	setup(props, { slots }) {
		return () => (
			<div
				class={`sv-chip sv-chip--${
					props.isDisabled ? 'disabled' : props.variant
				} sv-chip--${props.shape} sv-chip--${props.size}`}
			>
				{slots.default ? slots.default() : null}
			</div>
		)
	},
})
