using System;
using FluentValidation;
using Onboarding.Framework;

namespace Onboarding.Ambientalistas.Domain.ValuesObject
{
    public class Senha : Value<Senha>
    {
        public string _senha { get; }

        private Senha() { }

        internal Senha(string senha)
        {
            _senha = senha;
        }

        public static Senha Parse(string senha)
        {
            Validar(senha);

            return new Senha(senha);
        }

        private static void Validar(string senha)
        {
            var validador = new ValidarSenha();
            var validacao = validador.Validate(senha);

            if (validacao.IsValid)
            {
                throw new ArgumentException(validacao.Errors.ToString(), nameof(senha));
            }
        }

        public static implicit operator string(Senha senha) => senha._senha;
        public static implicit operator Senha(string senha) => Parse(senha);
    }

    public class ValidarSenha: AbstractValidator<Senha> {
        public ValidarSenha() {
            
            int min = 6;
            int max = 15;

            RuleFor(Senha => Senha._senha)
                .NotEmpty()
                .NotNull()                    
                .Length(min, max)
                .WithMessage($"Nome deve ter entre {min} e {max} caracters.");

        }
    }
}