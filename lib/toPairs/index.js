export default function toPairs(obj) {
	return Object.keys(obj).reduce(function(acc, key) {
		return acc.concat([[key, obj[key]]])
	}, [])
}
