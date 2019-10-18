using Onboarding.Framework;
using FluentValidation;
using System;
using System.Text.RegularExpressions;
using System.Collections.Generic;

namespace Onboarding.Ambientalistas.Domain.ValuesObject
{
    public class Email : Value<Email>
    {
        public string _Address { get; }
        private Email() { }
        internal Email(string address) {
            _Address = address;
        }     
        
        public static Email Parse(string address)
        {
            Validar(address);
            return new Email(address);
        }

        private static void Validar(string address)
        {
            var validador = new ValidarEmail();
            var validacao = validador.Validate(address);

            if (validacao.IsValid)
            {
                throw new ArgumentException(validacao.Errors.ToString(), nameof(address));
            }
        }    
        
        public static implicit operator string(Email email) => email._Address;
        public static implicit operator Email(string email) => Parse(email);
        
    }

    public class ValidarEmail: AbstractValidator<Email> {
        public ValidarEmail() {
            RuleFor(email => email._Address)                    
                .NotEmpty()
                .NotNull()
                .WithMessage("E-mail obrigatório.");

            RuleFor(email => email._Address)  
                .EmailAddress()
                .WithMessage("E-mail inválido.");
        }
    } 
}