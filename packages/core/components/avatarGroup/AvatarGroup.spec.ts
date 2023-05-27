import AvatarGroup, { AvatarGroupItem, AvatarGroupProps } from './AvatarGroup'
import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'

const MINIMAL_PROPS: AvatarGroupProps = {}

const AVATARS: AvatarGroupItem[] = [
	{ placeholder: 'AL' },
	{ placeholder: 'GF' },
	{ placeholder: 'RG' },
	{ placeholder: 'TT' },
]

describe('AvatarGroup', () => {
	test('should render properly with minimal props', () => {
		const wrapper = mount(AvatarGroup, {
			props: MINIMAL_PROPS,
		})

		expect(wrapper.find('.sv-avatar-group').exists()).toBeTruthy()
		expect(wrapper.find('.sv-avatar').exists()).toBeFalsy()
	})

	test('should render properly with 2 avatars', () => {
		const wrapper = mount(AvatarGroup, {
			props: {
				avatars: AVATARS.slice(0, 2),
			},
		})

		expect(wrapper.find('.sv-avatar-group').exists()).toBeTruthy()

		expect(wrapper.find('.sv-avatar').exists()).toBeTruthy()
		expect(wrapper.findAll('.sv-avatar').length).toBe(2)

		expect(wrapper.find('[data-testid="rest-avatar"]').exists()).toBeFalsy()
	})

	test('should render properly with more than 2 avatars', () => {
		const wrapper = mount(AvatarGroup, {
			props: {
				avatars: AVATARS,
			},
		})

		expect(wrapper.find('.sv-avatar-group').exists()).toBeTruthy()

		expect(wrapper.find('.sv-avatar').exists()).toBeTruthy()
		expect(
			wrapper.findAll('.sv-avatar:not([data-testid="rest-avatar"])')
				.length
		).toBe(2)

		expect(
			wrapper.find('[data-testid="rest-avatar"]').exists()
		).toBeTruthy()
		expect(wrapper.find('[data-testid="rest-avatar"]').text()).toBe(
			`+${AVATARS.length - 2}`
		)
	})
})
