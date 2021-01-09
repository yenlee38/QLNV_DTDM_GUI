using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using demo2.Models;
namespace demo2.Controllers
{
    [Route("api/listEmployee")]
    [ApiController]
    public class listEmployeeController : Controller
    {

        public ActionResult listEmployee()
        {
            return View();
        }
    }

    
}
