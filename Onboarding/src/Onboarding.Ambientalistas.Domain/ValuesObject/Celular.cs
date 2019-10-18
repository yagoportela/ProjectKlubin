using System;
using System.Text.RegularExpressions;
using FluentValidation;
using Onboarding.Framework;

namespace Onboarding.Ambientalistas.Domain.ValuesObject
{
    public class Celular : Value<Celular>
    {
        public string _celular { get; }

        private Celular() { }

        internal Celular(string celular)
        {
            _celular = celular;
        }

        public static Celular Parse(string celular)
        {
            Validar(celular);

            return new Celular(celular);
        }

        private static void Validar(string celular)
        {
            var validador = new ValidarCelular();
            var validacao = validador.Validate(celular);

            if (validacao.IsValid)
            {
                throw new ArgumentException(validacao.Errors.ToString(), nameof(celular));
            }
        }

        public static implicit operator string(Celular celular) => celular._celular;
        public static implicit operator Celular(string celular) => Parse(celular);
    }

    public class ValidarCelular: AbstractValidator<Celular> {
        
        private static readonly Regex RegexTelefone = 
                new Regex(@"^\+(?<DDI>\d\d)(?<DDD>\d\d)(?<NUMERO>\d{8,9})$");

        public ValidarCelular() {
            
            RuleFor(celular => celular._celular)
                .Matches(RegexTelefone)       
                .WithMessage($"Número inválido.");

        }
    }
}