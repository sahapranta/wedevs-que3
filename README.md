# Que: 3

Remove the duplicates from the array using as few expressions as possible.

```javascript
let arr = [1, 2, 2, 3, 4, 4, 5];

arr = [...new Set(arr)];

console.log(arr); //output [ 1, 2, 3, 4, 5 ]
```

