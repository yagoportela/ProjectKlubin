using System;
using FluentValidation.Results;
using Project.Domain.Core.Events;
using MediatR;

namespace Project.Domain.Core.Commands
{
    public abstract class Command : Message, IRequest<bool>
    {
        public DateTime Timestamp { get; private set; }
        public ValidationResult ValidationResult { get; set; }

        protected Command()
        {
            Timestamp = DateTime.Now;
        }

        public abstract bool IsValid();
    }
}