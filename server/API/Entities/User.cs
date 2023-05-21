

using API.Entities.OrderAggregate;
using Microsoft.AspNetCore.Identity;

namespace API.Entities
{
    //set primary and foreign as type int in <int>
    public class User : IdentityUser<int>
    {
        //IdentityUser provide all the necessary setup
        public UserAddress Address { get; set; }
    }
}