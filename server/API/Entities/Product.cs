/* Entity Framework features
Modelling
Querying
Change Tracking
Saving
Concurrency
Transationcs
Caching - store a subset of data that can be retrive faster than calling from the databases
Built-in conventions
Configurations
*/

namespace API.Entities
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public long Price { get; set; }
        public string PictureUrl { get; set; }
        public string Brand { get; set; }
        public string Type { get; set; }
        public int QuantityInStock { get; set; }
    }
}