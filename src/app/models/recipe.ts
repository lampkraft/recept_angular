export interface IRecipe {
	id: string,
	name: string,
	description: string,
	images: IRecipeImage[],
	base64Thumbnail: string,
	ingredients?: any[]
}

export interface IRecipeForRequest {
	id?: string,
	name: string,
	description: string,
	ingredients?: any[],
	base64Thumbnail: string
}

export interface IRecipeImageCollection {
	[key: string]: IRecipeImage;
}
  
export interface IRecipeImage {
	id: string;
	recipeId: string;
	base64Image: string;
}