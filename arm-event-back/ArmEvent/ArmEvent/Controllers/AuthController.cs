﻿using Microsoft.AspNetCore.Mvc;

namespace ArmEvent.Controllers
{
    public class AuthController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
