# Avatar

The Avatar component displays an avatar image or a placeholder.

<script setup>
    import { Avatar } from '../../dist/core.mjs'
    import '../../dist/style.css'
</script>

## Demo

<Avatar placeholder="AL" size="big"/>

<br />

<Avatar url="https://avatars.githubusercontent.com/u/45577511?v=4" placeholder="AL" type="rounded" size="big"/>

## Props

| Prop        | Type                                                        | Default     | Required | Description                                                                              |
| ----------- | ----------------------------------------------------------- | ----------- | -------- | ---------------------------------------------------------------------------------------- |
| url         | [URL](https://developer.mozilla.org/en-US/docs/Web/API/URL) | null        | No       | The URL object representing the avatar image URL.                                        |
| placeholder | String                                                      |             | Yes      | The placeholder text to be displayed when the avatar image is not available.             |
| type        | `rectangle`, `rounded`                                      | `rectangle` | No       | The type of avatar shape. Possible values: 'rounded', 'rectangle'. Default: 'rectangle'. |
| size        | `small`, `medium`, `big`                                    | `medium`    | No       | The size of the avatar. Possible values: 'small', 'medium', 'big'. Default: 'medium'.    |

## Usage

```vue
<template>
	<Avatar :url="avatarUrl" placeholder="User" type="rounded" size="big" />
</template>

<script>
import Avatar from './Avatar.vue'

export default {
	components: {
		Avatar,
	},
	data() {
		return {
			avatarUrl: {
				toString: () => 'https://example.com/avatar.jpg',
			},
		}
	},
}
</script>
```
