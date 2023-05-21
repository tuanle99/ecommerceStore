

namespace API.Entities.OrderAggregate
{
    public class OrderItem
    {
        public int id { get; set; }
        public ProductItemOrdered ItemOrdered { get; set; }
        public long Price { get; set; }
        public int Quantity { get; set; }
    }
}