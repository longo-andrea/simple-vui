# AvatarGroup

The AvatarGroup component displays a group of avatar images or placeholders.

<script setup>
    import { AvatarGroup } from '../../dist/core.mjs'
    import '../../dist/style.css'
    import { ref } from 'vue'

    const avatars = ref([
        { placeholder:'AL' },
        { placeholder:'ST' },
        { placeholder:'RG' },
        { placeholder:'AH' },
        { placeholder:'NI' },
    ])


</script>

## Demo

<AvatarGroup :avatars=avatars size="big"/>

<AvatarGroup :avatars=avatars type="rounded" size="big"/>

## Props

| Prop    | Type                                  | Default     | Required | Description                                                                                                               |
| ------- | ------------------------------------- | ----------- | -------- | ------------------------------------------------------------------------------------------------------------------------- |
| avatars | [AvatarGroupItem[]](#avatargroupitem) | \[\]        | No       | An array of objects representing the avatars to be displayed. Each object should have a `url` and `placeholder` property. |
| type    | `rectangle`, `rounded`                | `rectangle` | No       | The type of avatar shape. Possible values: 'rounded', 'rectangle'. Default: 'rectangle'.                                  |
| size    | `small`, `medium`, `big`              | `medium`    | No       | The size of the avatar. Possible values: 'small', 'medium', 'big'. Default: 'medium'.                                     |

## AvatarGroupItem

| Property    | Type                                                        | Default | Required | Description                                       |
| ----------- | ----------------------------------------------------------- | ------- | -------- | ------------------------------------------------- |
| url         | [URL](https://developer.mozilla.org/en-US/docs/Web/API/URL) |         | No       | The URL object representing the avatar image URL. |
| placeholder | string                                                      |         | Yes      | The placeholder text for the avatar image.        |

## Usage

```vue
<template>
	<AvatarGroup :avatars="avatarGroupItems" type="rounded" size="big" />
</template>

<script>
import AvatarGroup from './AvatarGroup.vue'

export default {
	components: {
		AvatarGroup,
	},
	data() {
		return {
			avatarGroupItems: [
				{
					url: new URL('https://example.com/avatar1.jpg'),
					placeholder: 'US1',
				},
				{
					url: new URL('https://example.com/avatar2.jpg'),
					placeholder: 'US2',
				},
				// Add more avatar items here
			],
		}
	},
}
</script>
```
