export default async function post(request, route, data) {
  const res = await request.post(route).send(data);
}
