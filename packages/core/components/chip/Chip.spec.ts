import Chip, { ChipPropsShape, ChipPropsVariant } from './Chip.tsx'
import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'

describe('Avatar', () => {
	test('should render properly with default slot', () => {
		const wrapper = mount(Chip, {
			slots: {
				default: 'Hello I am the content content!',
			},
		})

		expect(wrapper.find('.sv-chip--default').exists()).toBeTruthy()
		expect(wrapper.find('.sv-chip--rectangle').exists()).toBeTruthy()
		expect(wrapper.find('.sv-chip--disabled').exists()).toBeFalsy()

		expect(wrapper.find('.sv-chip').text()).toEqual(
			'Hello I am the content content!'
		)
	})

	test('should handle the variant, shape and size properly', () => {
		const wrapper = mount(Chip, {
			props: {
				variant: 'warning',
				shape: 'rounded',
				size: 'big',
			},
			slots: {
				default: 'Hello I am the content content!',
			},
		})

		expect(wrapper.find('.sv-chip--warning').exists()).toBeTruthy()
		expect(wrapper.find('.sv-chip--rounded').exists()).toBeTruthy()
		expect(wrapper.find('.sv-chip--big').exists()).toBeTruthy()
	})

	test('should handle the disabled state properly', () => {
		const wrapper = mount(Chip, {
			props: {
				variant: 'warning',
				isDisabled: true,
			},
			slots: {
				default: 'Hello I am the content content!',
			},
		})

		expect(wrapper.find('.sv-chip--warning').exists()).toBeFalsy()
		expect(wrapper.find('.sv-chip--disabled').exists()).toBeTruthy()
	})
})
