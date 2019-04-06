export const robots =[];

const createRandom = (i)=>{
	const names =['John','Barry','Steve','Brian','Robert','Jane','Jessie','Sally','Julie','Mary'];
	const lastNames =['Smith','Doe','Burns','Lambert','Plant','Nguyen','John','Lam','Peterson','Harris'];
	const gen = Math.floor(Math.random() * names.length);
	const gen2 = Math.floor(Math.random() * names.length);
	return ({
			id:i,
			robotID:Math.floor(Math.random() *((gen+gen2)*100)),
			name:`${names[gen]} ${lastNames[gen2]}`,
			username: `${names[gen]}.${lastNames[gen2]}${gen}`,
			email:`${names[gen]}.${lastNames[gen2]}${gen+gen2}@email.com`
		});
};
for(let i=1; i<11;i++){
	robots.push(createRandom(i));
}