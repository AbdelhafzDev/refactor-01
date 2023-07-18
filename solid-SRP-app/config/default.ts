export default {
    origin: "http://localhost:8000"
};

function mapJsonToInterface<T>(json: any, iface: any): T {
  const result: T = {} as T;  
  
  for (const key in iface.prototype) {
    const value = json[key];
    
    if (typeof value !== 'undefined') {      
      switch (typeof iface.prototype[key]) {
        case 'string':          
          result[key] = value as string;
          break;               
        case 'number':          
          result[key] = value as number;          
          break;   
        case 'object':       
          if (Array.isArray(iface.prototype[key])) {
            result[key] = value as any[];  
          }          
          break;           
      }
    }   
  }
  
  return result;
}
