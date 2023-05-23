import './Avatar.scss'
import {
	defineComponent,
	ExtractPublicPropTypes,
	toRefs,
	PropType,
	ref,
} from 'vue'

export type AvatarPropsType = 'rounded' | 'rectangle'
export type AvatarPropsSize = 'small' | 'medium' | 'big'

export const avatarProps = {
	url: {
		type: Object as PropType<URL>,
		default: null,
	},
	placeholder: {
		type: String,
		required: true,
	},
	type: {
		type: String as PropType<AvatarPropsType>,
		default: 'rectangle',
		validator: (value: AvatarPropsType) =>
			['rounded', 'rectangle'].includes(value),
	},
	size: {
		type: String as PropType<AvatarPropsSize>,
		default: 'medium',
		validator: (value: AvatarPropsSize) =>
			['small', 'medium', 'big'].includes(value),
	},
}

export type AvatarProps = ExtractPublicPropTypes<typeof avatarProps>

export default defineComponent({
	name: 'Avatar',
	props: avatarProps,
	setup(props: AvatarProps) {
		const {
			url,
			placeholder,
			size = ref<AvatarPropsSize>('medium'),
			type = ref<AvatarPropsType>('rectangle'),
		} = toRefs(props)

		const getAvatarImg = () => {
			return (
				<img
					class="sv-avatar__image"
					src={url.value?.toString()}
					alt={placeholder.value}
				/>
			)
		}
		const getPlaceholderImg = () => {
			return (
				<span class="sv-avatar__placeholder">{placeholder.value}</span>
			)
		}

		return () => (
			<span
				class={`sv-avatar sv-avatar--${size.value} sv-avatar--${type.value}`}
			>
				{url.value ? getAvatarImg() : getPlaceholderImg()}
			</span>
		)
	},
})
