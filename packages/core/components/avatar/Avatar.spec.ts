import Avatar, { AvatarProps } from './Avatar.tsx'
import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'

const MINIMAL_PROPS: AvatarProps = {
	placeholder: 'AL',
}

const CUSTOM_PROPS: AvatarProps = {
	placeholder: 'AL2',
	size: 'big',
	type: 'rounded',
}

describe('Avatar', () => {
	test('should render properly with minimal props', () => {
		const wrapper = mount(Avatar, {
			props: MINIMAL_PROPS,
		})

		expect(wrapper.find('.sv-avatar--rectangle').exists()).toBeTruthy()
		expect(wrapper.find('.sv-avatar--medium').exists()).toBeTruthy()

		expect(wrapper.find('.sv-avatar__placeholder').exists()).toBeTruthy()
		expect(wrapper.find('.sv-avatar__image').exists()).toBeFalsy()

		expect(wrapper.find('.sv-avatar__placeholder').text()).toEqual(
			MINIMAL_PROPS.placeholder
		)
	})

	test('should render properly with custom props', () => {
		const wrapper = mount(Avatar, {
			props: CUSTOM_PROPS,
		})

		expect(wrapper.find('.sv-avatar--rounded').exists()).toBeTruthy()
		expect(wrapper.find('.sv-avatar--big').exists()).toBeTruthy()

		expect(wrapper.find('.sv-avatar__placeholder').exists()).toBeTruthy()
		expect(wrapper.find('.sv-avatar__image').exists()).toBeFalsy()

		expect(wrapper.find('.sv-avatar__placeholder').text()).toEqual(
			CUSTOM_PROPS.placeholder
		)
	})

	test('should render properly with custom url', () => {
		const wrapper = mount(Avatar, {
			props: {
				...MINIMAL_PROPS,
				url: new URL('https://test.jpg'),
			} as AvatarProps,
		})

		expect(wrapper.find('.sv-avatar__placeholder').exists()).toBeFalsy()
		expect(wrapper.find('.sv-avatar__image').exists()).toBeTruthy()

		expect(wrapper.find('.sv-avatar__image').attributes().alt).toEqual(
			MINIMAL_PROPS.placeholder
		)
	})
})
