import './AvatarGroup.scss'
import { defineComponent, PropType, toRefs, ExtractPropTypes } from 'vue'
import Avatar, {
	AvatarProps,
	AvatarPropsSize,
	AvatarPropsType,
} from '../avatar/Avatar'

export interface AvatarGroupItem {
	url?: ExtractPropTypes<Pick<AvatarProps, 'url'>>
	placeholder: ExtractPropTypes<Pick<AvatarProps, 'placeholder'>>
}

export const avatarGroupProps = {
	avatars: {
		type: Array as PropType<AvatarGroupItem[]>,
		default: () => [],
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

export type AvatarGroupProps = ExtractPropTypes<typeof avatarGroupProps>

export default defineComponent({
	name: 'AvatarGroup',
	props: avatarGroupProps,
	setup(props: AvatarGroupProps) {
		const { avatars, type, size } = toRefs(props)
		const restAvatarCount =
			avatars?.value && avatars.value.length > 2
				? avatars.value.length - 2
				: 0

		return () => (
			<div class="sv-avatar-group">
				{avatars?.value?.slice(0, 2).map((avatar: AvatarGroupItem) => (
					<Avatar
						type={type?.value}
						size={size?.value}
						url={
							avatar.url
								? new URL(avatar.url?.toString())
								: undefined
						}
						placeholder={avatar.placeholder.toString()}
					/>
				))}

				{restAvatarCount ? (
					<Avatar
						placeholder={`+${restAvatarCount}`}
						type={type?.value}
						size={size?.value}
						data-testid="rest-avatar"
					/>
				) : null}
			</div>
		)
	},
})
