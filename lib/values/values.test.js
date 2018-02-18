var values = require('.')

test("returns array of all enumerable values in object", () => {
	const obj = { a: 1, b: '2', c: undefined }
	const d = function() {}

	// define enumerable value
	Object.defineProperty(obj, 'd', { enumerable: true, value: fun })
	// define non-enumerable value
	Object.defineProperty(obj, 'e', { enumerable: false, value: 5 })

	expect(values(obj)).toEqual([1, '2', undefined, 4])
})
