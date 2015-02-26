steal('can', 'faker', 'can/util/fixture', function(can, faker) {

	var store = can.fixture.store(10, function(i) {
		return {
			id: i,
			firstName: faker.name.firstName(),
			lastName: faker.name.lastName(),
			looks: faker.image.avatar(),
			shipName: faker.company.bs(),
			upvotes: faker.helpers.randomNumber(200),
			downvotes: faker.helpers.randomNumber(100),
			favorited: Math.round(faker.helpers.randomNumber()),
		}
	});

	// restore to cause a loading delay of x MS (for testing / debugging)
	// can.fixture.delay = 700;

	can.fixture('GET /captains', store.findAll);
	can.fixture('GET /captains/{id}', store.findOne);
	can.fixture('POST /captains', store.create);
	can.fixture('PUT /captains/{id}', store.update);
	can.fixture('DELETE /captains/{id}', store.destroy);

	return store;

});
