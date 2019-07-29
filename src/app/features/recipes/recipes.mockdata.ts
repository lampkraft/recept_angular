import { IRecipe } from 'src/app/models/recipe';


// export const data: IRecipe[] = [
// 	{
// 		name: 'Vegobiffar',
// 		description: 'Vegetariska biffar lorem ipsum Vegetariska biffar lorem ipsum Vegetariska biffar lorem ipsum ',
// 		images: ['gratang.png'],
// 		ingredients: [
// 			{ amount: '2dl', name: 'Kål' },
// 			{ amount: '2tsk', name: 'Grädde' },
// 			{ amount: '100g', name: 'Qourne' },
// 			{ amount: '500g', name: 'Smör' },
// 			{ amount: '1L', name: 'Saft' },
// 			{ amount: '15st', name: 'Lime' },
// 			{ amount: '1st', name: 'Citron' },
// 			{ amount: '2cl', name: 'Mango' },
// 			{ amount: '1st', name: 'Banan' }
// 		]
// 	},
// 	{
// 		name: 'Palak Paneer',
// 		description: 'Palak Paneer lorem ipsum Vegetariska biffar lorem ipsum Vegetariska biffar lorem ipsum ',
// 		images: ['paneer.png'],
// 		ingredients: [
// 			{ amount: '2dl', name: 'Kål' },
// 			{ amount: '2tsk', name: 'Grädde' },
// 			{ amount: '100g', name: 'Qourne' },
// 			{ amount: '500g', name: 'Smör' },
// 			{ amount: '1L', name: 'Saft' },
// 			{ amount: '15st', name: 'Lime' },
// 			{ amount: '1st', name: 'Citron' },
// 			{ amount: '2cl', name: 'Mango' },
// 			{ amount: '1st', name: 'Banan' }
// 		]
// 	},
// 	{
// 		name: 'Indisk gryta',
// 		description: 'Indisk Gryta lorem ipsum Vegetariska biffar lorem ipsum Vegetariska biffar lorem ipsum ',
// 		images: ['indisk.png'],
// 		ingredients: [
// 			{ amount: '2dl', name: 'Kål' },
// 			{ amount: '2tsk', name: 'Grädde' },
// 			{ amount: '100g', name: 'Qourne' },
// 			{ amount: '500g', name: 'Smör' },
// 			{ amount: '1L', name: 'Saft' },
// 			{ amount: '15st', name: 'Lime' },
// 			{ amount: '1st', name: 'Citron' },
// 			{ amount: '2cl', name: 'Mango' },
// 			{ amount: '1st', name: 'Banan' }
// 		]
// 	},
// 	{
// 		name: 'Veg. Köttfärssås',
// 		description: 'Veg. Köttfärssås lorem ipsum Vegetariska biffar lorem ipsum Vegetariska biffar lorem ipsum ',
// 		images: ['fars.png'],
// 		ingredients: [
// 			{ amount: '2dl', name: 'Kål' },
// 			{ amount: '2tsk', name: 'Grädde' },
// 			{ amount: '100g', name: 'Qourne' },
// 			{ amount: '500g', name: 'Smör' },
// 			{ amount: '1L', name: 'Saft' },
// 			{ amount: '15st', name: 'Lime' },
// 			{ amount: '1st', name: 'Citron' },
// 			{ amount: '2cl', name: 'Mango' },
// 			{ amount: '1st', name: 'Banan' }
// 		]
// 	},
// 	{
// 		name: 'Veg. Lasagne',
// 		description: 'Veg. Lasagne lorem ipsum Vegetariska biffar lorem ipsum Vegetariska biffar lorem ipsum ',
// 		images: ['lasagne.png'],
// 		ingredients: [
// 			{ amount: '2dl', name: 'Kål' },
// 			{ amount: '2tsk', name: 'Grädde' },
// 			{ amount: '100g', name: 'Qourne' },
// 			{ amount: '500g', name: 'Smör' },
// 			{ amount: '1L', name: 'Saft' },
// 			{ amount: '15st', name: 'Lime' },
// 			{ amount: '1st', name: 'Citron' },
// 			{ amount: '2cl', name: 'Mango' },
// 			{ amount: '1st', name: 'Banan' }
// 		]
// 	},
// 	{
// 		name: 'Champinjonpasta',
// 		description: 'Champinjonpasta lorem ipsum Vegetariska biffar lorem ipsum Vegetariska biffar lorem ipsum ',
// 		images: ['champinjon.png'],
// 		ingredients: [
// 			{ amount: '2dl', name: 'Kål' },
// 			{ amount: '2tsk', name: 'Grädde' },
// 			{ amount: '100g', name: 'Qourne' },
// 			{ amount: '500g', name: 'Smör' },
// 			{ amount: '1L', name: 'Saft' },
// 			{ amount: '15st', name: 'Lime' },
// 			{ amount: '1st', name: 'Citron' },
// 			{ amount: '2cl', name: 'Mango' },
// 			{ amount: '1st', name: 'Banan' }
// 		]
// 	},
// 	{
// 		name: 'Panerad Strömming och Potatismos',
// 		description: 'Panerad strömming lorem ipsum Vegetariska biffar lorem ipsum Vegetariska biffar lorem ipsum ',
// 		images: ['stromming.png'],
// 		ingredients: [
// 			{ amount: '2dl', name: 'Kål' },
// 			{ amount: '2tsk', name: 'Grädde' },
// 			{ amount: '100g', name: 'Qourne' },
// 			{ amount: '500g', name: 'Smör' },
// 			{ amount: '1L', name: 'Saft' },
// 			{ amount: '15st', name: 'Lime' },
// 			{ amount: '1st', name: 'Citron' },
// 			{ amount: '2cl', name: 'Mango' },
// 			{ amount: '1st', name: 'Banan' }
// 		]
// 	},
// 	{
// 		name: 'Panerad Torsk',
// 		description: 'Panerad torsk lorem ipsum Vegetariska biffar lorem ipsum Vegetariska biffar lorem ipsum ',
// 		images: ['torsk.png'],
// 		ingredients: [
// 			{ amount: '2dl', name: 'Kål' },
// 			{ amount: '2tsk', name: 'Grädde' },
// 			{ amount: '100g', name: 'Qourne' },
// 			{ amount: '500g', name: 'Smör' },
// 			{ amount: '1L', name: 'Saft' },
// 			{ amount: '15st', name: 'Lime' },
// 			{ amount: '1st', name: 'Citron' },
// 			{ amount: '2cl', name: 'Mango' },
// 			{ amount: '1st', name: 'Banan' }
// 		]
// 	},
// 	{
// 		name: 'Pannkakor',
// 		description: 'Pannkakor lorem ipsum Vegetariska biffar lorem ipsum Vegetariska biffar lorem ipsum ',
// 		images: ['pannkakor.png'],
// 		ingredients: [
// 			{ amount: '2dl', name: 'Kål' },
// 			{ amount: '2tsk', name: 'Grädde' },
// 			{ amount: '100g', name: 'Qourne' },
// 			{ amount: '500g', name: 'Smör' },
// 			{ amount: '1L', name: 'Saft' },
// 			{ amount: '15st', name: 'Lime' },
// 			{ amount: '1st', name: 'Citron' },
// 			{ amount: '2cl', name: 'Mango' },
// 			{ amount: '1st', name: 'Banan' }
// 		]
// 	},
// 	{
// 		name: 'Halloumiburgare',
// 		description: 'Halloumiburgare lorem ipsum Vegetariska biffar lorem ipsum Vegetariska biffar lorem ipsum ',
// 		images: ['halloumi.png'],
// 		ingredients: [
// 			{ amount: '2dl', name: 'Kål' },
// 			{ amount: '2tsk', name: 'Grädde' },
// 			{ amount: '100g', name: 'Qourne' },
// 			{ amount: '500g', name: 'Smör' },
// 			{ amount: '1L', name: 'Saft' },
// 			{ amount: '15st', name: 'Lime' },
// 			{ amount: '1st', name: 'Citron' },
// 			{ amount: '2cl', name: 'Mango' },
// 			{ amount: '1st', name: 'Banan' }
// 		]
// 	}
// ]