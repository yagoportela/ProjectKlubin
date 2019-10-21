using System;
using Onboarding.Ambientalistas.Domain.ValuesObject;
using Onboarding.Framework;

namespace Onboarding.Ambientalistas.Domain
{
    public class Ambientalista : AggregateRoot<AmbientalistaId>
    {
        public static class Events
        {
            public class AmbientalistaCadastrado
            {
                public AmbientalistaId AmbientalistaId { get; set; }
                public Email Email { get; set; }
                public NomeCompleto NomeCompleto { get; set; }
                public string Apelido { get; set; }
                public Senha Senha { get; set; }
                public Celular Celular { get; set; }
                public Documento Documento {get; set;}
                public DateTime Consentimento { get; set; }
            }
        }

        public enum AmbientalistaState
        {
            Cadastrado
        }

        public AmbientalistaId AmbientalistaId { get; private set; }
        public Email Email { get; private set; }
        public NomeCompleto NomeCompleto { get; private set; }
        public string Apelido { get; private set; }
        public Senha Senha { get; private set; }
        public Celular Celular { get; private set; }
        public Documento Documento {get; private set;}
        public DateTime Consentimento { get; private set; }
        public AmbientalistaState State { get; private set; }

        public Ambientalista(AmbientalistaId ambientalistaId,
                             Email email,
                             NomeCompleto nomeCompleto,
                             string apelido,
                             Senha senha,
                             Celular celular,
                             Documento documento,
                             DateTime consentimento)
        {
            if (ambientalistaId is null) throw new ArgumentNullException(nameof(ambientalistaId));
            if (email is null) throw new ArgumentNullException(nameof(email));
            if (nomeCompleto is null) throw new ArgumentNullException(nameof(nomeCompleto));
            if (apelido is null) throw new ArgumentNullException(nameof(apelido));
            if (senha is null) throw new ArgumentNullException(nameof(senha));

            Apply(new Events.AmbientalistaCadastrado
            {
                AmbientalistaId = ambientalistaId,
                Email = email,
                NomeCompleto = nomeCompleto,
                Apelido = apelido,
                Senha = senha,
                Celular = celular,
                Documento = documento,
                Consentimento = consentimento
            });
        }
        protected override void EnsureValidState()
        {
            var valid =
                AmbientalistaId != null &&
                Email != null &&
                NomeCompleto != null &&
                Apelido != null &&
                Senha != null;

            if (!valid)
                throw new InvalidEntityStateException(this, $"Post-checks failed in state {State}");
        }

        protected override void When(object @event)
        {
            throw new NotImplementedException();
        }
    }
}
