export default {
    origin: "http://localhost:8000"
};

interface IProject {
  id?: number;
  name?: string;
  description?: string;
}

interface IProjectResponse {
  id?: number;
  name?: string;
  description?: string;
  url?: string;
  startDate?: string;
  finishDate?: string;
}

const mapResponse = (response: IProjectResponse[]) => response.data.map((p) => ({
  id: p.id,
  name:p.name,
  description: p.description,
}));

const response = await fetch(/* .. */);
const data = await response.json();

const projects: IProject[] = mapResponse(data);
  
  return result;
}
