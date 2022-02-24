howMuchILoveYou = (n) =>
	['not at all', 'I love you', 'a little', 'a lot', 'passionately', 'madly'][
		n % 6
	];

/*

return n%6 == 0 && n%5&&n%4&&n%3&&n%2 ? `not at all` : 
       n%5 == 0 && n%4&&n%3&&n%2 ? `madly` : 
       n%4 == 0 && n%3&&n%2 ? `passionately` :
       n%3 == 0 && n%2 ? `a lot` : 
       n%2 == 0 ? `a little`: `I love you`

*/
