import axios from 'axios';

const list = async (_, args) => {
  const { offset, limit } = args;
  
  // Search simple string
  const data = await axios.get('https://pokeapi.co/api/v2/pokemon')
  console.log("data==: ", data.data)

  // Pagination 
  const result = paginate(data.data.results, offset, limit)
  const totalItems = data.data.results.length
  const totallimits = Math.ceil(totalItems / offset);

  return {
    results: result,
    hasNextPage: limit < totallimits,
    totalData: result.length
  }
}

const paginate = (items, offset, limit) => {
  return items.slice(offset, offset+limit);
}

const compareSort = (a, b) => {
  const last = a.id
  const next = b.id

  return last > next;
}

export default list;